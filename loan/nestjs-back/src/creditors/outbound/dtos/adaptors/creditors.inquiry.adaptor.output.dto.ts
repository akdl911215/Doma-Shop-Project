import { BaseOutputDto } from "../../../../_common/dtos/base.output.dto";
import { Creditors } from "@prisma/client";

export class CreditorsInquiryAdaptorOutputDto extends BaseOutputDto<Creditors> {}
