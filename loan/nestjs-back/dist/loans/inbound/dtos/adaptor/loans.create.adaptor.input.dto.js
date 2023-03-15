"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansCreateAdaptorInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const loans_model_1 = require("../../../domain/entity/loans.model");
class LoansCreateAdaptorInputDto extends (0, swagger_1.PickType)(loans_model_1.LoansModel, [
    "debtorsId",
    "creditorsId",
    "totalAmountLoan",
    "loanRepaymentDate",
    "interest",
]) {
}
exports.LoansCreateAdaptorInputDto = LoansCreateAdaptorInputDto;
//# sourceMappingURL=loans.create.adaptor.input.dto.js.map