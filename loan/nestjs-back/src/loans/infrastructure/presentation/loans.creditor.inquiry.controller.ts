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
  CREDITOR_UNIQUE_ID_REQUIRED,
  UNIQUE_ID_REQUIRED,
} from "../../../_common/constants/http/errors/400";
import { INTERNAL_SERVER_ERROR } from "../../../_common/constants/http/errors/500";
import { NOTFOUND_LOAN } from "../../../_common/constants/http/errors/404";
import { LoansCreditorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptors/loans.creditor.inquiry.adaptor.input.dto";
import { LoansCreditorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptors/loans.creditor.inquiry.adaptor.output.dto";
import { LoansCreditorInquiryAdaptor } from "../../domain/adaptors/loans.creditor.inquiry.adaptor";

@ApiTags("loans")
@Controller("loans")
export class LoansCreditorInquiryController {
  constructor(
    @Inject("USE_CASE_CREDITOR_INQUIRY")
    private readonly useCase: LoansCreditorInquiryAdaptor
  ) {}

  @ApiBearerAuth("access_token")
  @Get("/creditor")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({
    summary: "LOAN CREDITOR INQUIRY API",
    description: "대출 채권자 기준 조회 절차",
  })
  @ApiResponse({ status: 200, description: `${TWO_HUNDRED_OK}` })
  @ApiResponse({
    status: 400,
    description: `${CREDITOR_UNIQUE_ID_REQUIRED}, ${UNIQUE_ID_REQUIRED}`,
  })
  @ApiResponse({ status: 404, description: `${NOTFOUND_LOAN}` })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async creditorInquiry(
    @Query() dto: LoansCreditorInquiryAdaptorInputDto
  ): Promise<LoansCreditorInquiryAdaptorOutputDto> {
    return await this.useCase.creditorInquiry(dto);
  }
}
