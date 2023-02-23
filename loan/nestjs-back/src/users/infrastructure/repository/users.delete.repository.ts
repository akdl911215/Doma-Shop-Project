import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { UsersDeleteAdaptorInputDto } from "../../inbound/dtos/users.delete.adaptor.input.dto";
import { NOTFOUND_USER } from "../../../_common/constants/http/errors/404";
import { UsersDeleteAdaptorOutputDto } from "../../outbound/dtos/users.delete.adaptor.output.dto";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersDeleteAdaptor } from "../../domain/adaptor/users.delete.adaptor";

@Injectable()
@Dependencies([PrismaService])
export class UsersDeleteRepository implements UsersDeleteAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async delete(
    dto: UsersDeleteAdaptorInputDto
  ): Promise<UsersDeleteAdaptorOutputDto> {
    const { id } = dto;
    const [dbUser] = await this.prisma.$transaction([
      this.prisma.users.findUnique({ where: { id } }),
    ]);
    if (!dbUser) throw new NotFoundException(NOTFOUND_USER);

    try {
      await this.prisma.$transaction([
        this.prisma.users.delete({ where: { id } }),
      ]);

      return { response: { delete: true } };
    } catch (e) {
      if (e instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(e);
      } else {
        throw new Error(`${e}`);
      }
    }
  }
}
