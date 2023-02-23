import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansDeleteAdaptorOutputDto } from "../../outbound/dtos/loans.delete.adaptor.output.dto";
import { LoansDeleteAdaptor } from "../../domain/adaptor/loans.delete.adaptor";
import { LoansDeleteAdaptorInputDto } from "../../inbound/dtos/loans.delete.adaptor.input.dto";
export declare class LoansDeleteRepository implements LoansDeleteAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    delete(dto: LoansDeleteAdaptorInputDto): Promise<LoansDeleteAdaptorOutputDto>;
}
