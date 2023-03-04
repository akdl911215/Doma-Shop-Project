import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansInquiryAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.inquiry.adaptor.output.dto";
import { LoansInquiryAdaptor } from "../../domain/adaptor/loans.inquiry.adaptor";
import { LoansInquiryAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.inquiry.adaptor.input.dto";
export declare class LoansInquiryRepository implements LoansInquiryAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    inquiry(dto: LoansInquiryAdaptorInputDto): Promise<LoansInquiryAdaptorOutputDto>;
}
