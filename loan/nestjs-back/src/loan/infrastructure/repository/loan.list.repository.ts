import { Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../common/infrastructures/prisma/prisma.service";
import { LoanListAdaptor } from "../../domain/adaptor/loan.list.adaptor";
import { LoanListAdaptorInputDto } from "../../inbound/dtos/loan.list.adaptor.input.dto";
import { LoanListAdaptorOutputDto } from "../../outbound/dtos/loan.list.adaptor.output.dto";

@Injectable()
@Dependencies([PrismaService])
export class LoanListRepository implements LoanListAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async list(
    dto: LoanListAdaptorInputDto
  ): Promise<LoanListAdaptorOutputDto> {
    return Promise.resolve(undefined);
  }
}
