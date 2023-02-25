import { LoansListAdaptor } from "../../domain/adaptor/loans.list.adaptor";
export declare class LoansListController {
    private readonly useCase;
    constructor(useCase: LoansListAdaptor);
    private list;
}
