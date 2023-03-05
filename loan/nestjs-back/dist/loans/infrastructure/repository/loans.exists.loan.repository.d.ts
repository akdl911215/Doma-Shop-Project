import { PrismaService } from "../../../_common/infrastructures/prisma/prisma.service";
import { LoansExistsLoanInterface } from "../../domain/interface/loans.exists.loan.interface";
import { LoansExistsLoanInterfaceInputDto } from "../../inbound/dtos/interface/loans.exists.loan.interface.input.dto";
import { LoansExistsLoanInterfaceOutputDto } from "../../outbound/dtos/interface/loans.exists.loan.interface.output.dto";
export declare class LoansExistsLoanRepository implements LoansExistsLoanInterface {
    private readonly prisma;
    constructor(prisma: PrismaService);
    existsLoan(dto: LoansExistsLoanInterfaceInputDto): Promise<LoansExistsLoanInterfaceOutputDto>;
}
