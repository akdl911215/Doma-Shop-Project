import { Body, Controller, Inject, Post } from "@nestjs/common";
import {
  ApiBearerAuth,
  ApiConsumes,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { CREATE_SUCCESS } from "../../../_common/constants/http/success/201";
import { INTERNAL_SERVER_ERROR } from "../../../_common/constants/http/errors/500";
import { LoansCreateAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.create.adaptor.output.dto";
import { LoansCreateAdaptor } from "../../domain/adaptor/loans.create.adaptor";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.create.adaptor.input.dto";
import {
  CREDITOR_ID_REQUIRED,
  CREDITOR_UNIQUE_ID_REQUIRED,
  DEBTOR_ID_REQUIRED,
  DEBTOR_UNIQUE_ID_REQUIRED,
  LOAN_INTEREST_REQUIRED,
  LOAN_REPAYMENT_DATE_REQUIRED,
  LOAN_REQUIRED,
} from "../../../_common/constants/http/errors/400";

@ApiTags("loans")
@Controller("loans")
export class LoansCreateController {
  constructor(
    @Inject("USE_CASE_CREATE") private readonly useCase: LoansCreateAdaptor
  ) {}

  @ApiBearerAuth("access_token")
  @Post("/create")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiOperation({ summary: "USER REGISTER API", description: "회원 가입 절차" })
  @ApiResponse({ status: 201, description: `${CREATE_SUCCESS}` })
  @ApiResponse({
    status: 400,
    description: `${CREDITOR_ID_REQUIRED}, ${CREDITOR_UNIQUE_ID_REQUIRED}, ${DEBTOR_ID_REQUIRED}, ${DEBTOR_UNIQUE_ID_REQUIRED}, ${LOAN_REQUIRED}, ${LOAN_REPAYMENT_DATE_REQUIRED}, ${LOAN_INTEREST_REQUIRED}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  private async create(
    @Body() dto: LoansCreateAdaptorInputDto
  ): Promise<LoansCreateAdaptorOutputDto> {
    return await this.useCase.create(dto);
  }
}
