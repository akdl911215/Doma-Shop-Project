import {
  BadRequestException,
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { UsersUpdateNicknameAdaptorInputDto } from "../../inbound/dtos/users.update.nickname.adaptor.input.dto";
import { UsersModel } from "../../domain/entity/users.model";
import { UsersUpdateNicknameAdaptorOutputDto } from "../../outbound/dtos/users.update.nickname.adaptor.output.dto";
import { NOTFOUND_USER } from "../../../common/constants/http/errors/404";
import { NO_MATCH_USER_ID } from "../../../common/constants/http/errors/400";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersUpdateNicknameAdaptor } from "../../domain/adaptor/users.update.nickname.adaptor";

@Injectable()
@Dependencies([PrismaService])
export class UsersUpdateNicknameRepository
  implements UsersUpdateNicknameAdaptor
{
  constructor(private readonly prisma: PrismaService) {}

  public async updateNickname(
    dto: UsersUpdateNicknameAdaptorInputDto
  ): Promise<UsersUpdateNicknameAdaptorOutputDto> {
    const { nickname, id } = dto;
    const [dbUser] = await this.prisma.$transaction([
      this.prisma.users.findUnique({ where: { id } }),
    ]);
    if (!dbUser) throw new NotFoundException(NOTFOUND_USER);

    try {
      const [updateUser] = await this.prisma.$transaction([
        this.prisma.users.update({
          where: { id },
          data: {
            nickname,
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
