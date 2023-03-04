import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansUpdateAdaptorOutputDto } from "../../outbound/dtos/adaptor/loans.update.adaptor.output.dto";
import { LoansUpdateAdaptor } from "../../domain/adaptor/loans.update.adaptor";
import { LoansUpdateAdaptorInputDto } from "../../inbound/dtos/adaptor/loans.update.adaptor.input.dto";
export declare class LoansUpdateRepository implements LoansUpdateAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    update(dto: LoansUpdateAdaptorInputDto): Promise<LoansUpdateAdaptorOutputDto>;
}
