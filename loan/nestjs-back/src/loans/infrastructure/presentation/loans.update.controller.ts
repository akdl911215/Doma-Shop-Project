import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Body, Controller, Inject, Patch } from "@nestjs/common";
import { LoansUpdateAdaptor } from "../../domain/adaptors/loans.update.adaptor";
import { TWO_HUNDRED_OK } from "../../../_common/constants/http/success/200";
import { INTERNAL_SERVER_ERROR } from "../../../_common/constants/http/errors/500";
import { LoansUpdateAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.update.adaptor.input.dto";
import { LoansUpdateAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.update.adaptor.output.dto";
import { NOTFOUND_LOAN } from "../../../_common/constants/http/errors/404";
import { UNIQUE_ID_REQUIRED } from "../../../_common/constants/http/errors/400";

@ApiTags("loans")
@Controller("loans")
export class LoansUpdateController {
  constructor(
    @Inject("USE_CASE_UPDATE") private readonly useCase: LoansUpdateAdaptor
  ) {}

  @ApiBearerAuth("access_token")
  @Patch("/")
  @ApiConsumes("application/json")
  @ApiOperation({
    summary: "LOAN MODIFY API",
    description: "대출 수정 절차",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({ status: 400, description: `${UNIQUE_ID_REQUIRED}` })
  @ApiResponse({ status: 404, description: `${NOTFOUND_LOAN}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  @ApiBody({ type: LoansUpdateAdaptorInputDto })
  private async update(
    @Body() dto: LoansUpdateAdaptorInputDto
  ): Promise<LoansUpdateAdaptorOutputDto> {
    return await this.useCase.update(dto);
  }
}
