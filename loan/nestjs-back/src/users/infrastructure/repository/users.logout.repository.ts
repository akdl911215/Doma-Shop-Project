import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { UsersLogoutAdaptorOutputDto } from "../../outbound/dtos/users.logout.adaptor.output.dto";
import { NOTFOUND_USER } from "../../../_common/constants/http/errors/404";
import { UsersLogoutAdaptorInputDto } from "../../inbound/dtos/users.logout.adaptor.input.dto";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersLogoutAdaptor } from "../../domain/adaptors/users.logout.adaptor";

@Injectable()
@Dependencies([PrismaService])
export class UsersLogoutRepository implements UsersLogoutAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async logout(
    dto: UsersLogoutAdaptorInputDto
  ): Promise<UsersLogoutAdaptorOutputDto> {
    const { id } = dto;
    console.log("id", id);
    const user = await this.prisma.users.findUnique({ where: { id } });
    console.log("user", user);
    if (!user) throw new NotFoundException(NOTFOUND_USER);

    try {
      const [updateUsers] = await this.prisma.$transaction([
        this.prisma.users.update({
          where: { id },
          data: { refreshToken: null },
        }),
      ]);

      if (updateUsers.refreshToken === null) {
        return { response: { logout: true } };
      } else {
        return { response: { logout: false } };
      }
    } catch (e) {
      if (e instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(e);
      } else {
        throw new Error(`${e}`);
      }
    }
  }
}
