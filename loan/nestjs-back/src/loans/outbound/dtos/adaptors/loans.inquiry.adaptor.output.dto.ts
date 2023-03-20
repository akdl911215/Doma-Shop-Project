import { BaseOutputDto } from "../../../../_common/dtos/base.output.dto";
import { Loans } from "@prisma/client";

export class LoansInquiryAdaptorOutputDto extends BaseOutputDto<Loans> {}
