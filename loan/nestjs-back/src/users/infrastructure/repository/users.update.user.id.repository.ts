import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { NOTFOUND_USER } from "../../../_common/constants/http/errors/404";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersUpdateNameAdaptor } from "../../domain/adaptors/users.update.name.adaptor";
import { UsersUpdateNameAdaptorInputDto } from "../../inbound/dtos/users.update.name.adaptor.input.dto";
import { UsersUpdateNameAdaptorOutputDto } from "../../outbound/dtos/users.update.name.adaptor.output.dto";
import { UsersUpdateUserIdAdaptor } from "../../domain/adaptors/users.update.user.id.adaptor";
import { UsersUpdateUserIdAdaptorInputDto } from "../../inbound/dtos/users.update.user.id.adaptor.input.dto";
import { UsersUpdateUserIdAdaptorOutputDto } from "../../outbound/dtos/users.update.user.id.adaptor.output.dto";

@Injectable()
@Dependencies([PrismaService])
export class UsersUpdateUserIdRepository implements UsersUpdateUserIdAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async updateUserId(
    dto: UsersUpdateUserIdAdaptorInputDto
  ): Promise<UsersUpdateUserIdAdaptorOutputDto> {
    const { userId, id } = dto;
    const [dbUser] = await this.prisma.$transaction([
      this.prisma.users.findUnique({ where: { id } }),
    ]);
    if (!dbUser) throw new NotFoundException(NOTFOUND_USER);

    try {
      const [updateUser] = await this.prisma.$transaction([
        this.prisma.users.update({
          where: { id },
          data: {
            userId,
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
