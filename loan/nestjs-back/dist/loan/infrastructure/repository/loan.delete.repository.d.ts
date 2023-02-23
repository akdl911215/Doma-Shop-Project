import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoanDeleteAdaptor } from "../../domain/adaptor/loan.delete.adaptor";
import { LoanDeleteAdaptorInputDto } from "../../inbound/dtos/loan.delete.adaptor.input.dto";
import { LoanDeleteAdaptorOutputDto } from "../../outbound/dtos/loan.delete.adaptor.output.dto";
export declare class LoanDeleteRepository implements LoanDeleteAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    delete(dto: LoanDeleteAdaptorInputDto): Promise<LoanDeleteAdaptorOutputDto>;
}
