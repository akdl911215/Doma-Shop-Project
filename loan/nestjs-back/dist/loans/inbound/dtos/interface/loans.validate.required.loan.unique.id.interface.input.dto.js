"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansValidateRequiredLoanUniqueIdInterfaceInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const loans_model_1 = require("../../../domain/entity/loans.model");
class LoansValidateRequiredLoanUniqueIdInterfaceInputDto extends (0, swagger_1.PickType)(loans_model_1.LoansModel, ["creditorUniqueId"]) {
}
exports.LoansValidateRequiredLoanUniqueIdInterfaceInputDto = LoansValidateRequiredLoanUniqueIdInterfaceInputDto;
//# sourceMappingURL=loans.validate.required.loan.unique.id.interface.input.dto.js.map