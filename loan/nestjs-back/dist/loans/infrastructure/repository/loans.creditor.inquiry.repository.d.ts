import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansCreditorInquiryAdaptor } from "../../domain/adaptor/loans.creditor.inquiry.adaptor";
import { LoansCreditorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.creditor.inquiry.adaptor.input.dto";
import { LoansCreditorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.creditor.inquiry.adaptor.output.dto";
export declare class LoansCreditorInquiryRepository implements LoansCreditorInquiryAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    creditorInquiry(dto: LoansCreditorInquiryAdaptorInputDto): Promise<LoansCreditorInquiryAdaptorOutputDto>;
}
