import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { NOTFOUND_USER } from "../../../_common/constants/http/errors/404";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { UsersUpdateAddressAdaptor } from "../../domain/adaptors/users.update.address.adaptor";
import { UsersUpdateAddressAdaptorInputDto } from "../../inbound/dtos/users.update.address.adaptor.input.dto";
import { UsersUpdateAddressAdaptorOutputDto } from "../../outbound/dtos/users.update.address.adaptor.output.dto";

@Injectable()
@Dependencies([PrismaService])
export class UsersUpdateAddressRepository implements UsersUpdateAddressAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async updateAddress(
    dto: UsersUpdateAddressAdaptorInputDto
  ): Promise<UsersUpdateAddressAdaptorOutputDto> {
    const { address, id } = dto;
    const [dbUser] = await this.prisma.$transaction([
      this.prisma.users.findUnique({ where: { id } }),
    ]);
    if (!dbUser) throw new NotFoundException(NOTFOUND_USER);

    try {
      const [updateUser] = await this.prisma.$transaction([
        this.prisma.users.update({
          where: { id },
          data: {
            address,
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
