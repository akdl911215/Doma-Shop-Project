"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansValidateRequiredLoanCreditorUniqueIdAdaptorInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const loans_model_1 = require("../../domain/entity/loans.model");
class LoansValidateRequiredLoanCreditorUniqueIdAdaptorInputDto extends (0, swagger_1.PickType)(loans_model_1.LoansModel, ["creditorUniqueId"]) {
}
exports.LoansValidateRequiredLoanCreditorUniqueIdAdaptorInputDto = LoansValidateRequiredLoanCreditorUniqueIdAdaptorInputDto;
//# sourceMappingURL=loans.validate.required.loan.creditor.unique.id.adaptor.input.dto.js.map