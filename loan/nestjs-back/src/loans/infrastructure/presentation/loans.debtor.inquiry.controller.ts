import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Controller, Get, Inject, Query } from "@nestjs/common";
import { TWO_HUNDRED_OK } from "../../../_common/constants/http/success/200";
import {
  DEBTOR_UNIQUE_ID_REQUIRED,
  UNIQUE_ID_REQUIRED,
} from "../../../_common/constants/http/errors/400";
import { INTERNAL_SERVER_ERROR } from "../../../_common/constants/http/errors/500";
import { NOTFOUND_LOAN } from "../../../_common/constants/http/errors/404";
import { LoansDebtorInquiryAdaptor } from "../../domain/adaptor/loans.debtor.inquiry.adaptor";
import { LoansDebtorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.debtor.inquiry.adaptor.input.dto";
import { LoansDebtorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.debtor.inquiry.adaptor.output.dto";

@ApiTags("loans")
@Controller("loans")
export class LoansDebtorInquiryController {
  constructor(
    @Inject("USE_CASE_DEBTOR_INQUIRY")
    private readonly useCase: LoansDebtorInquiryAdaptor
  ) {}

  @ApiBearerAuth("access_token")
  @Get("/debtor")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "LOAN DEBTOR INQUIRY API",
    description: "대출 채무자 기준 조회 절차",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({
    status: 400,
    description: `${DEBTOR_UNIQUE_ID_REQUIRED}, ${UNIQUE_ID_REQUIRED}`,
  })
  @ApiResponse({ status: 404, description: `${NOTFOUND_LOAN}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async debtorInquiry(
    @Query() dto: LoansDebtorInquiryAdaptorInputDto
  ): Promise<LoansDebtorInquiryAdaptorOutputDto> {
    return await this.useCase.debtorInquiry(dto);
  }
}
