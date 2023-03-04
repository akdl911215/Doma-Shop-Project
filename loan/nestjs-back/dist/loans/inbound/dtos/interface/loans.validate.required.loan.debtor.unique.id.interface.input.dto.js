"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansValidateRequiredLoanDebtorUniqueIdInterfaceInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const loans_model_1 = require("../../../domain/entity/loans.model");
class LoansValidateRequiredLoanDebtorUniqueIdInterfaceInputDto extends (0, swagger_1.PickType)(loans_model_1.LoansModel, ["debtorUniqueId"]) {
}
exports.LoansValidateRequiredLoanDebtorUniqueIdInterfaceInputDto = LoansValidateRequiredLoanDebtorUniqueIdInterfaceInputDto;
//# sourceMappingURL=loans.validate.required.loan.debtor.unique.id.interface.input.dto.js.map