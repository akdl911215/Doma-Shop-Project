import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansExistsLoanUniqueIdInterfaceInputDto } from "../../inbound/dtos/interface/loans.exists.loan.unique.id.interface.input.dto";
import { LoansExistsLoanUniqueIdInterfaceOutputDto } from "../../outbound/dtos/interface/loans.exists.loan.unique.id.interface.output.dto";
import { LoansExistsLoanUniqueIdInterface } from "../../domain/interface/loans.exists.loan.unique.id.interface";
export declare class LoansExistsLoanUniqueIdRepository implements LoansExistsLoanUniqueIdInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    existsLoanUniqueId(dto: LoansExistsLoanUniqueIdInterfaceInputDto): Promise<LoansExistsLoanUniqueIdInterfaceOutputDto>;
}
