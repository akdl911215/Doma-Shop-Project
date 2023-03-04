"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansValidateRequiredLoanDebtorUniqueIdAdaptorInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const loans_model_1 = require("../../domain/entity/loans.model");
class LoansValidateRequiredLoanDebtorUniqueIdAdaptorInputDto extends (0, swagger_1.PickType)(loans_model_1.LoansModel, ["debtorUniqueId"]) {
}
exports.LoansValidateRequiredLoanDebtorUniqueIdAdaptorInputDto = LoansValidateRequiredLoanDebtorUniqueIdAdaptorInputDto;
//# sourceMappingURL=loans.validate.required.loan.debtor.unique.id.adaptor.input.dto.js.map