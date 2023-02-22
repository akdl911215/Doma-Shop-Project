import { Inject, Injectable } from "@nestjs/common";
import { LoanUpdateAdaptor } from "../../domain/adaptor/loan.update.adaptor";
import { LoanUpdateAdaptorOutputDto } from "../../outbound/dtos/loan.update.adaptor.output.dto";
import { LoanUpdateAdaptorInputDto } from "../../inbound/dtos/loan.update.adaptor.input.dto";

@Injectable()
export class LoanUpdateUseCase implements LoanUpdateAdaptor {
  constructor(@Inject("LIST") private readonly repository: LoanUpdateAdaptor) {}

  public async update(
    dto: LoanUpdateAdaptorInputDto
  ): Promise<LoanUpdateAdaptorOutputDto> {
    return Promise.resolve(undefined);
  }
}
