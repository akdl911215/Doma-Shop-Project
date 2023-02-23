import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoanCreateAdaptor } from "../../domain/adaptor/loan.create.adaptor";
import { LoanCreateAdaptorOutputDto } from "../../outbound/dtos/loan.create.adaptor.output.dto";
import { LoanCreateAdaptorInputDto } from "../../inbound/dtos/loan.create.adaptor.input.dto";
export declare class LoanCreateRepository implements LoanCreateAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: LoanCreateAdaptorInputDto): Promise<LoanCreateAdaptorOutputDto>;
}
