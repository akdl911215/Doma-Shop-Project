"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanCreateAdaptorInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const loans_model_1 = require("../../domain/entity/loans.model");
class LoanCreateAdaptorInputDto extends (0, swagger_1.PickType)(loans_model_1.LoansModel, [
    "debtorId",
    "debtor",
    "creditorId",
    "creditor",
    "totalAmountLoan",
    "loanRepaymentDate",
    "interest",
]) {
}
exports.LoanCreateAdaptorInputDto = LoanCreateAdaptorInputDto;
//# sourceMappingURL=loan.create.adaptor.input.dto.js.map