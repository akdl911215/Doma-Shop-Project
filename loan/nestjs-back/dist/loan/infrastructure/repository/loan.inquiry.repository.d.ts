import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoanInquiryAdaptor } from "../../domain/adaptor/loan.inquiry.adaptor";
import { LoanInquiryAdaptorInputDto } from "../../inbound/dtos/loan.inquiry.adaptor.input.dto";
import { LoanInquiryAdaptorOutputDto } from "../../outbound/dtos/loan.inquiry.adaptor.output.dto";
export declare class LoanInquiryRepository implements LoanInquiryAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    inquiry(dto: LoanInquiryAdaptorInputDto): Promise<LoanInquiryAdaptorOutputDto>;
}
