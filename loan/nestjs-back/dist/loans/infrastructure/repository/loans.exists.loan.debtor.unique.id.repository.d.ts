import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansExistsLoanDebtorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.debtor.unique.id.interface";
import { LoansExistsLoanDebtorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.exists.loan.debtor.unique.id.interface.input.dto";
import { LoansExistsLoanDebtorUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/loans.exists.loan.debtor.unique.id.interface.output.dto";
export declare class LoansExistsLoanDebtorUniqueIdRepository implements LoansExistsLoanDebtorUniqueIdInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    existsLoanDebtorUniqueId(dto: LoansExistsLoanDebtorUniqueIdInterfaceInputDto): Promise<LoansExistsLoanDebtorUniqueIdInterfaceOutputDto>;
}
