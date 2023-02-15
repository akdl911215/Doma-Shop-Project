import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { NOTFOUND_USER } from "../../../common/constants/http/errors/404";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersUpdateNameAdaptor } from "../../domain/adaptor/users.update.name.adaptor";
import { UsersUpdateNameAdaptorInputDto } from "../../inbound/dtos/users.update.name.adaptor.input.dto";
import { UsersUpdateNameAdaptorOutputDto } from "../../outbound/dtos/users.update.name.adaptor.output.dto";

@Injectable()
@Dependencies([PrismaService])
export class UsersUpdateNameRepository implements UsersUpdateNameAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async updateName(
    dto: UsersUpdateNameAdaptorInputDto
  ): Promise<UsersUpdateNameAdaptorOutputDto> {
    const { name, id } = dto;
    const [dbUser] = await this.prisma.$transaction([
      this.prisma.users.findUnique({ where: { id } }),
    ]);
    if (!dbUser) throw new NotFoundException(NOTFOUND_USER);

    try {
      const [updateUser] = await this.prisma.$transaction([
        this.prisma.users.update({
          where: { id },
          data: {
            name,
          },
        }),
      ]);
      return {
        response: updateUser,
      };
    } catch (e) {
      if (e instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(e);
      } else {
        throw new Error(`${e}`);
      }
    }
  }
}
