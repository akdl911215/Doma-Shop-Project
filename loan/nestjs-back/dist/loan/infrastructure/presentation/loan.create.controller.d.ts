import { LoanCreateAdaptor } from "../../domain/adaptor/loan.create.adaptor";
export declare class LoanController {
    private readonly useCase;
    constructor(useCase: LoanCreateAdaptor);
    private create;
}
