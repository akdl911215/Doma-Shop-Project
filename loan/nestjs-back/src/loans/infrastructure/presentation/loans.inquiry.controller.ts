import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Controller, Get, Inject, Param } from "@nestjs/common";
import { LoansInquiryAdaptor } from "../../domain/adaptors/loans.inquiry.adaptor";
import { LoansInquiryAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.inquiry.adaptor.input.dto";
import { LoansInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.inquiry.adaptor.output.dto";
import { TWO_HUNDRED_OK } from "../../../_common/constants/http/success/200";
import {
  NO_MATCH_CREDITOR_UNIQUE_ID,
  NO_MATCH_DEBTOR_UNIQUE_ID,
  NO_MATCH_LOAN_ID,
} from "../../../_common/constants/http/errors/400";
import { INTERNAL_SERVER_ERROR } from "../../../_common/constants/http/errors/500";
import {
  NOTFOUND_CREDITOR,
  NOTFOUND_DEBTOR,
  NOTFOUND_LOAN,
} from "../../../_common/constants/http/errors/404";

@ApiTags("loans")
@Controller("loans")
export class LoansInquiryController {
  constructor(
    @Inject("USE_CASE_INQUIRY")
    private readonly useCase: LoansInquiryAdaptor
  ) {}

  @ApiBearerAuth("access_token")
  @Get("/:id")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "LOAN INQUIRY API",
    description: "대출 조회 절차",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({
    status: 400,
    description: `${NO_MATCH_LOAN_ID}, ${NO_MATCH_CREDITOR_UNIQUE_ID}, ${NO_MATCH_DEBTOR_UNIQUE_ID}`,
  })
  @ApiResponse({
    status: 404,
    description: `${NOTFOUND_DEBTOR}, ${NOTFOUND_CREDITOR}, ${NOTFOUND_LOAN}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async inquiry(
    @Param() dto: LoansInquiryAdaptorInputDto
  ): Promise<LoansInquiryAdaptorOutputDto> {
    return await this.useCase.inquiry(dto);
  }
}
