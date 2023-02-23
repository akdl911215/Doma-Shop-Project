import { Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansUpdateAdaptorOutputDto } from "../../outbound/dtos/loans.update.adaptor.output.dto";
import { LoansUpdateAdaptor } from "../../domain/adaptor/loans.update.adaptor";
import { LoansUpdateAdaptorInputDto } from "../../inbound/dtos/loans.update.adaptor.input.dto";

@Injectable()
@Dependencies([PrismaService])
export class LoansUpdateRepository implements LoansUpdateAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async update(
    dto: LoansUpdateAdaptorInputDto
  ): Promise<LoansUpdateAdaptorOutputDto> {
    return Promise.resolve(undefined);
  }
}
