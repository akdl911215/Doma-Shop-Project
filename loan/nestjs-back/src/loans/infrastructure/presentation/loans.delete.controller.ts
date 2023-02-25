import {
  ApiBearerAuth,
  ApiBody,
  ApiConsumes,
  ApiResponse,
  ApiTags,
} from "@nestjs/swagger";
import { Body, Controller, Delete, Inject } from "@nestjs/common";
import { LoansDeleteAdaptor } from "../../domain/adaptor/loans.delete.adaptor";
import { CREATE_SUCCESS } from "../../../_common/constants/http/success/201";
import { INTERNAL_SERVER_ERROR } from "../../../_common/constants/http/errors/500";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/loans.delete.adaptor.input.dto";
import { User } from "../../../_common/decorators/user.decorator";
import { UsersModel } from "../../../users/domain/entity/users.model";
import { LoansDeleteAdaptorOutputDto } from "../../outbound/dtos/loans.delete.adaptor.output.dto";
import { UNAUTHORIZED } from "../../../_common/constants/http/errors/401";
import {
  NOTFOUND_LOAN,
  NOTFOUND_USER,
} from "../../../_common/constants/http/errors/404";
import {
  NO_MATCH_LOAN_ID,
  NO_MATCH_USER_ID,
} from "../../../_common/constants/http/errors/400";

@ApiTags("loans")
@Controller("loans")
export class LoansDeleteController {
  constructor(
    @Inject("USE_CASE_DELETE") private readonly useCase: LoansDeleteAdaptor
  ) {}

  @ApiBearerAuth("access_token")
  @Delete("/")
  @ApiConsumes("application/x-www-form-urlencoded")
  @ApiResponse({ status: 201, description: `${CREATE_SUCCESS}` })
  @ApiResponse({
    status: 400,
    description: `${NO_MATCH_LOAN_ID}, ${NO_MATCH_USER_ID}`,
  })
  @ApiResponse({ status: 401, description: `${UNAUTHORIZED}` })
  @ApiResponse({
    status: 404,
    description: `${NOTFOUND_LOAN}, ${NOTFOUND_USER}`,
  })
  @ApiResponse({ status: 500, description: `${INTERNAL_SERVER_ERROR}` })
  @ApiBody({ type: LoansDeleteAdaptorInputDto })
  private async delete(
    @Body() dto: LoansDeleteAdaptorInputDto,
    @User() user: UsersModel
  ): Promise<LoansDeleteAdaptorOutputDto> {
    return await this.useCase.delete(dto);
  }
}
