"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoansModel = void 0;
const base_common_core_dto_1 = require("../../../_common/dtos/base.common.core.dto");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class LoansModel extends base_common_core_dto_1.BaseCommonCoreDto {
}
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: "",
    }),
    __metadata("design:type", String)
], LoansModel.prototype, "debtorsId", void 0);
__decorate([
    (0, class_validator_1.IsUUID)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: "",
    }),
    __metadata("design:type", String)
], LoansModel.prototype, "creditorsId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], LoansModel.prototype, "totalAmountLoan", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        default: "",
    }),
    __metadata("design:type", String)
], LoansModel.prototype, "loanRepaymentDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        default: 0,
    }),
    __metadata("design:type", Number)
], LoansModel.prototype, "interest", void 0);
exports.LoansModel = LoansModel;
//# sourceMappingURL=loans.model.js.map