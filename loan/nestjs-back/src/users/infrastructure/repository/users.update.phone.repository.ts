import {
  BadRequestException,
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { UsersModel } from "../../domain/entity/users.model";
import { NOTFOUND_USER } from "../../../common/constants/http/errors/404";
import { NO_MATCH_USER_ID } from "../../../common/constants/http/errors/400";
import { UsersUpdatePhoneAdaptorInputDto } from "../../inbound/dtos/users.update.phone.adaptor.input.dto";
import { UsersUpdatePhoneAdaptorOutputDto } from "../../outbound/dtos/users.update.phone.adaptor.output.dto";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { UsersUpdatePhoneAdaptor } from "../../domain/adaptor/users.update.phone.adaptor";

@Injectable()
@Dependencies([PrismaService])
export class UsersUpdatePhoneRepository implements UsersUpdatePhoneAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async updatePhone(
    dto: UsersUpdatePhoneAdaptorInputDto
  ): Promise<UsersUpdatePhoneAdaptorOutputDto> {
    const { id, phone } = dto;

    const [dbUser] = await this.prisma.$transaction([
      this.prisma.users.findUnique({ where: { id } }),
    ]);
    if (!dbUser) throw new NotFoundException(NOTFOUND_USER);

    try {
      const [updateUser] = await this.prisma.$transaction([
        this.prisma.users.update({
          where: { id },
          data: {
            phone,
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
