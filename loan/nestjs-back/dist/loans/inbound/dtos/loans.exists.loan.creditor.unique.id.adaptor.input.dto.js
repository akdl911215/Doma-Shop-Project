"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansExistsLoanCreditorUniqueIdAdaptorInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const loans_model_1 = require("../../domain/entity/loans.model");
class LoansExistsLoanCreditorUniqueIdAdaptorInputDto extends (0, swagger_1.PickType)(loans_model_1.LoansModel, ["creditorUniqueId"]) {
}
exports.LoansExistsLoanCreditorUniqueIdAdaptorInputDto = LoansExistsLoanCreditorUniqueIdAdaptorInputDto;
//# sourceMappingURL=loans.exists.loan.creditor.unique.id.adaptor.input.dto.js.map