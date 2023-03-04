"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansExistsLoanDebtorUniqueIdInterfaceInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const loans_model_1 = require("../../../domain/entity/loans.model");
class LoansExistsLoanDebtorUniqueIdInterfaceInputDto extends (0, swagger_1.PickType)(loans_model_1.LoansModel, ["debtorUniqueId"]) {
}
exports.LoansExistsLoanDebtorUniqueIdInterfaceInputDto = LoansExistsLoanDebtorUniqueIdInterfaceInputDto;
//# sourceMappingURL=loans.exists.loan.debtor.unique.id.interface.input.dto.js.map