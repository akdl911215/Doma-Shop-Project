import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansSearchByUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.search.by.unique.id.interface.input.dto";
import { LoansSearchByUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/loans.search.by.unique.id.interface.output.dto";
import { LoansSearchByUniqueIdInterface } from "../../domain/interface/loans.search.by.unique.id.interface";
export declare class LoansSearchByUniqueIdRepository implements LoansSearchByUniqueIdInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    searchByUniqueId(dto: LoansSearchByUniqueIdInterfaceInputDto): Promise<LoansSearchByUniqueIdInterfaceOutputDto>;
}
