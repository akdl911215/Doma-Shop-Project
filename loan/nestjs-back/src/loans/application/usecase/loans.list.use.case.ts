import { Inject, Injectable } from "@nestjs/common";
import { LoansListAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.list.adaptor.output.dto";
import { LoansListAdaptor } from "../../domain/adaptor/loans.list.adaptor";
import { LoansListAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.list.adaptor.input.dto";

@Injectable()
export class LoansListUseCase implements LoansListAdaptor {
  constructor(@Inject("LIST") private readonly repository: LoansListAdaptor) {}

  public async list(
    dto: LoansListAdaptorInputDto
  ): Promise<LoansListAdaptorOutputDto> {
    return await this.repository.list(dto);
  }
}
