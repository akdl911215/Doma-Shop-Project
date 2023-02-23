import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { UsersWithdrawalAdaptorInputDto } from "../../inbound/dtos/users.withdrawal.adaptor.input.dto";
import { UsersWithdrawalAdaptorOutputDto } from "../../outbound/dtos/users.withdrawal.adaptor.output.dto";
import { NOTFOUND_USER } from "../../../_common/constants/http/errors/404";
import { UsersWithdrawalAdaptor } from "../../domain/adaptor/users.withdrawal.adaptor";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";

@Injectable()
@Dependencies([PrismaService])
export class UsersWithdrawalRepository implements UsersWithdrawalAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async withdrawal(
    dto: UsersWithdrawalAdaptorInputDto
  ): Promise<UsersWithdrawalAdaptorOutputDto> {
    const { id } = dto;
    const [dbUser] = await this.prisma.$transaction([
      this.prisma.users.findUnique({ where: { id } }),
    ]);
    if (!dbUser) throw new NotFoundException(NOTFOUND_USER);

    try {
      const [usersWithdrawal] = await this.prisma.$transaction([
        this.prisma.users.update({
          where: { id },
          data: {
            deletedAt: new Date(),
          },
        }),
      ]);
      if (usersWithdrawal.deletedAt === null) {
        return { response: { withdrawal: false } };
      } else {
        return { response: { withdrawal: true } };
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
