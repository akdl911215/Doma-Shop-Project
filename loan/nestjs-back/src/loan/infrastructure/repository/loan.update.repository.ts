import { Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { LoanUpdateAdaptor } from "../../domain/adaptor/loan.update.adaptor";
import { LoanUpdateAdaptorOutputDto } from "../../outbound/dtos/loan.update.adaptor.output.dto";
import { LoanUpdateAdaptorInputDto } from "../../inbound/dtos/loan.update.adaptor.input.dto";

@Injectable()
@Dependencies([PrismaService])
export class LoanUpdateRepository implements LoanUpdateAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async update(
    dto: LoanUpdateAdaptorInputDto
  ): Promise<LoanUpdateAdaptorOutputDto> {
    return Promise.resolve(undefined);
  }
}
