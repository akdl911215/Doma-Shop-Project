import { Dependencies, Injectable } from "@nestjs/common";
import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansListAdaptorOutputDto } from "../../outbound/dtos/loans.list.adaptor.output.dto";
import { LoansListAdaptor } from "../../domain/adaptor/loans.list.adaptor";
import { LoansListAdaptorInputDto } from "../../inbound/dtos/loans.list.adaptor.input.dto";

@Injectable()
@Dependencies([PrismaService])
export class LoansListRepository implements LoansListAdaptor {
  constructor(private readonly prisma: PrismaService) {}

  public async list(
    dto: LoansListAdaptorInputDto
  ): Promise<LoansListAdaptorOutputDto> {
    return Promise.resolve(undefined);
  }
}
