"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansExistsLoanCreditorUniqueIdInterfaceInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const loans_model_1 = require("../../domain/entity/loans.model");
class LoansExistsLoanCreditorUniqueIdInterfaceInputDto extends (0, swagger_1.PickType)(loans_model_1.LoansModel, ["creditorUniqueId"]) {
}
exports.LoansExistsLoanCreditorUniqueIdInterfaceInputDto = LoansExistsLoanCreditorUniqueIdInterfaceInputDto;
//# sourceMappingURL=loans.exists.loan.creditor.unique.id.interface.input.dto.js.map