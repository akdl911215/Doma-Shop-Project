import { Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { LoanDeleteAdaptor } from "../../domain/adaptor/loan.delete.adaptor";
import { LoanDeleteAdaptorInputDto } from "../../inbound/dtos/loan.delete.adaptor.input.dto";
import { LoanDeleteAdaptorOutputDto } from "../../outbound/dtos/loan.delete.adaptor.output.dto";

@Injectable()
@Dependencies([PrismaService])
export class LoanDeleteRepository implements LoanDeleteAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async delete(
    dto: LoanDeleteAdaptorInputDto
  ): Promise<LoanDeleteAdaptorOutputDto> {
    return Promise.resolve(undefined);
  }
}
