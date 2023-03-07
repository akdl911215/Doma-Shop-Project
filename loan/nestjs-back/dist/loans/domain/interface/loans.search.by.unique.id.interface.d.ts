import { LoansSearchByUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.search.by.unique.id.interface.input.dto";
import { LoansSearchByUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/loans.search.by.unique.id.interface.output.dto";
export interface LoansSearchByUniqueIdInterface {
    readonly searchByUniqueId: (dto: LoansSearchByUniqueIdInterfaceInputDto) => Promise<LoansSearchByUniqueIdInterfaceOutputDto>;
}
