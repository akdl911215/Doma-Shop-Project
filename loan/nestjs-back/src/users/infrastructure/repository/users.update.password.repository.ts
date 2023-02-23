import {
  Dependencies,
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { NOTFOUND_USER } from "../../../_common/constants/http/errors/404";
import { HashEncodedService } from "../bcrypt/hash.encoded.service";
import { UsersUpdatePasswordAdaptorInputDto } from "../../inbound/dtos/users.update.password.adaptor.input.dto";
import { UsersUpdatePasswordAdaptorOutputDto } from "../../outbound/dtos/users.update.password.adaptor.output.dto";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersUpdatePasswordAdaptor } from "../../domain/adaptor/users.update.password.adaptor";

@Injectable()
@Dependencies([PrismaService])
export class UsersUpdatePasswordRepository
  implements UsersUpdatePasswordAdaptor
{
  constructor(
    private readonly prisma: PrismaService,
    @Inject("HASH_ENCODED") private readonly hash: HashEncodedService
  ) {}

  public async updatePassword(
    dto: UsersUpdatePasswordAdaptorInputDto
  ): Promise<UsersUpdatePasswordAdaptorOutputDto> {
    const { password: reqPassword, id } = dto;

    const [dbUser] = await this.prisma.$transaction([
      this.prisma.users.findUnique({ where: { id } }),
    ]);
    if (!dbUser) throw new NotFoundException(NOTFOUND_USER);

    const {
      response: { encoded: password },
    } = await this.hash.encoded({ password: reqPassword });

    try {
      const [updateUser] = await this.prisma.$transaction([
        this.prisma.users.update({
          where: { id },
          data: {
            password,
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
