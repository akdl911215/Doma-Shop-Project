import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansCreateAdaptorOutputDto } from "../../outbound/dtos/loans.create.adaptor.output.dto";
import { LoansCreateAdaptorInputDto } from "../../inbound/dtos/loans.create.adaptor.input.dto";
import { LoansCreateAdaptor } from "../../domain/adaptor/loans.create.adaptor";
export declare class LoansCreateRepository implements LoansCreateAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(dto: LoansCreateAdaptorInputDto): Promise<LoansCreateAdaptorOutputDto>;
}
