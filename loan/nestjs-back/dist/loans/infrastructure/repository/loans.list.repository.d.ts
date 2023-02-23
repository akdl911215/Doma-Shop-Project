import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansListAdaptorOutputDto } from "../../outbound/dtos/loans.list.adaptor.output.dto";
import { LoansListAdaptor } from "../../domain/adaptor/loans.list.adaptor";
import { LoansListAdaptorInputDto } from "../../inbound/dtos/loans.list.adaptor.input.dto";
export declare class LoansListRepository implements LoansListAdaptor {
    private readonly prisma;
    constructor(prisma: PrismaService);
    list(dto: LoansListAdaptorInputDto): Promise<LoansListAdaptorOutputDto>;
}
