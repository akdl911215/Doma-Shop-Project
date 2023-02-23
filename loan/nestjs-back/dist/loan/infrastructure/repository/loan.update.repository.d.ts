import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoanUpdateAdaptor } from "../../domain/adaptor/loan.update.adaptor";
import { LoanUpdateAdaptorOutputDto } from "../../outbound/dtos/loan.update.adaptor.output.dto";
import { LoanUpdateAdaptorInputDto } from "../../inbound/dtos/loan.update.adaptor.input.dto";
export declare class LoanUpdateRepository implements LoanUpdateAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    update(dto: LoanUpdateAdaptorInputDto): Promise<LoanUpdateAdaptorOutputDto>;
}
