"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanUpdateAdaptorInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const loans_model_1 = require("../../domain/entity/loans.model");
class LoanUpdateAdaptorInputDto extends (0, swagger_1.PartialType)(loans_model_1.LoansModel) {
}
exports.LoanUpdateAdaptorInputDto = LoanUpdateAdaptorInputDto;
//# sourceMappingURL=loan.update.adaptor.input.dto.js.map