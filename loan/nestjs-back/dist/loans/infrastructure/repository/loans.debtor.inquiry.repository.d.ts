import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansDebtorInquiryAdaptor } from "../../domain/adaptor/loans.debtor.inquiry.adaptor";
import { LoansDebtorInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.debtor.inquiry.adaptor.input.dto";
import { LoansDebtorInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.debtor.inquiry.adaptor.output.dto";
export declare class LoansDebtorInquiryRepository implements LoansDebtorInquiryAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    debtorInquiry(dto: LoansDebtorInquiryAdaptorInputDto): Promise<LoansDebtorInquiryAdaptorOutputDto>;
}
