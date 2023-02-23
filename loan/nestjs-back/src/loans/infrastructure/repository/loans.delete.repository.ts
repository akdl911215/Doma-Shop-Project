import {
  Dependencies,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansDeleteAdaptorOutputDto } from "../../outbound/dtos/loans.delete.adaptor.output.dto";
import { LoansDeleteAdaptor } from "../../domain/adaptor/loans.delete.adaptor";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/loans.delete.adaptor.input.dto";
import { Loans } from "@prisma/client";
import { LoansModel } from "../../domain/entity/loans.model";
import {
  NOTFOUND_LOAN,
  NOTFOUND_USER,
} from "../../../_common/constants/http/errors/404";

@Injectable()
@Dependencies([PrismaService])
export class LoansDeleteRepository implements LoansDeleteAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async delete(
    dto: LoansDeleteAdaptorInputDto
  ): Promise<LoansDeleteAdaptorOutputDto> {
    const { id, userUniqueId } = dto;

    const loan = this.prisma.loans.findUnique({ where: { id } });
    if (!loan) throw new NotFoundException(NOTFOUND_LOAN);

    const user = this.prisma.users.findUnique({ where: { id: userUniqueId } });
    if (!user) throw new NotFoundException(NOTFOUND_USER);

    try {
      await this.prisma.$transaction([
        this.prisma.loans.delete({ where: { id } }),
      ]);

      return { response: { loanErase: true } };
    } catch (e) {
      if (e instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(e);
      } else {
        throw new Error(`${e}`);
      }
    }
  }
}
