import { Inject, Injectable } from "@nestjs/common";
import { LoansListAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.list.adaptor.output.dto";
import { LoansListAdaptor } from "../../domain/adaptors/loans.list.adaptor";
import { LoansListAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.list.adaptor.input.dto";

@Injectable()
export class LoansListUseCase implements LoansListAdaptor {
  constructor(@Inject("LIST") private readonly repository: LoansListAdaptor) {}

  public async list(
    dto: LoansListAdaptorInputDto
  ): Promise<LoansListAdaptorOutputDto> {
    return await this.repository.list(dto);
  }
}
