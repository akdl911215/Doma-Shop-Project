import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansExistsLoanCreditorUniqueIdInterface } from "../../domain/interface/loans.exists.loan.creditor.unique.id.interface";
import { LoansExistsLoanCreditorUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.exists.loan.creditor.unique.id.interface.input.dto";
import { LoansExistsLoanCreditorUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/loans.exists.loan.creditor.unique.id.interface.output.dto";
export declare class LoansExistsLoanCreditorUniqueIdRepository implements LoansExistsLoanCreditorUniqueIdInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    existsLoanCreditorUniqueId(dto: LoansExistsLoanCreditorUniqueIdInterfaceInputDto): Promise<LoansExistsLoanCreditorUniqueIdInterfaceOutputDto>;
}
