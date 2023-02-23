import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoanListAdaptor } from "../../domain/adaptor/loan.list.adaptor";
import { LoanListAdaptorInputDto } from "../../inbound/dtos/loan.list.adaptor.input.dto";
import { LoanListAdaptorOutputDto } from "../../outbound/dtos/loan.list.adaptor.output.dto";
export declare class LoanListRepository implements LoanListAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(dto: LoanListAdaptorInputDto): Promise<LoanListAdaptorOutputDto>;
}
