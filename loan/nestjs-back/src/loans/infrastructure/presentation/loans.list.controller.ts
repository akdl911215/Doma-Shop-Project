import {
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Controller, Get, Inject, Query } from "@nestjs/common";
import { LoansListAdaptor } from "../../domain/adaptors/loans.list.adaptor";
import { TWO_HUNDRED_OK } from "../../../_common/constants/http/success/200";
import { INTERNAL_SERVER_ERROR } from "../../../_common/constants/http/errors/500";
import { LoansListAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.list.adaptor.input.dto";
import { LoansListAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.list.adaptor.output.dto";
import { NOTFOUND_LIST } from "../../../_common/constants/http/errors/404";

@ApiTags("loans")
@Controller("loans")
export class LoansListController {
  constructor(
    @Inject("USE_CASE_LIST") private readonly useCase: LoansListAdaptor
  ) {}

  @Get("/")
  @ApiOperation({
    summary: "LOAN LIST API",
    description: "대출 리스트 조회",
  })
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 404, description: `${NOTFOUND_LIST}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async list(
    @Query() dto: LoansListAdaptorInputDto
  ): Promise<LoansListAdaptorOutputDto> {
    return await this.useCase.list(dto);
  }
}
