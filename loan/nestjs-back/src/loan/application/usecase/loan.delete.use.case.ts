import { Inject, Injectable } from "@nestjs/common";
import { LoanDeleteAdaptor } from "../../domain/adaptor/loan.delete.adaptor";
import { LoanDeleteAdaptorOutputDto } from "../../outbound/dtos/loan.delete.adaptor.output.dto";
import { LoanDeleteAdaptorInputDto } from "../../inbound/dtos/loan.delete.adaptor.input.dto";

@Injectable()
export class LoanDeleteUseCase implements LoanDeleteAdaptor {
  constructor(
    @Inject("DELETE") private readonly repository: LoanDeleteAdaptor
  ) {}

  public async delete(
    dto: LoanDeleteAdaptorInputDto
  ): Promise<LoanDeleteAdaptorOutputDto> {
    return Promise.resolve(undefined);
  }
}
