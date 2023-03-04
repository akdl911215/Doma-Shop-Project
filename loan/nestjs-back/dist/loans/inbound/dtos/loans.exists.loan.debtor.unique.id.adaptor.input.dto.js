"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansExistsLoanDebtorUniqueIdAdaptorInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const loans_model_1 = require("../../domain/entity/loans.model");
class LoansExistsLoanDebtorUniqueIdAdaptorInputDto extends (0, swagger_1.PickType)(loans_model_1.LoansModel, ["debtorUniqueId"]) {
}
exports.LoansExistsLoanDebtorUniqueIdAdaptorInputDto = LoansExistsLoanDebtorUniqueIdAdaptorInputDto;
//# sourceMappingURL=loans.exists.loan.debtor.unique.id.adaptor.input.dto.js.map