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
exports.UsersModel = void 0;
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
const base_common_core_dto_1 = require("../../../common/dtos/base.common.core.dto");
var SosialType;
(function (SosialType) {
    SosialType[SosialType["KAKAO"] = 0] = "KAKAO";
    SosialType[SosialType["NAVER"] = 1] = "NAVER";
    SosialType[SosialType["BASIC"] = 2] = "BASIC";
})(SosialType || (SosialType = {}));
class UsersModel extends base_common_core_dto_1.BaseCommonCoreDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        default: "",
    }),
    (0, class_validator_1.Matches)(/^[A-za-z0-9ㄱ-ㅎㅏ-ㅣ가-힣]{2,12}$/, {
        message: "ID은 2자리 이상 12자리 이하입니다.",
    }),
    __metadata("design:type", String)
], UsersModel.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        format: "password",
    }),
    (0, class_validator_1.Matches)(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message: "비밀번호는 최소 8자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수문자입니다.",
    }),
    __metadata("design:type", String)
], UsersModel.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        default: "",
    }),
    __metadata("design:type", String)
], UsersModel.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        default: "",
    }),
    __metadata("design:type", String)
], UsersModel.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        default: "",
    }),
    (0, class_validator_1.Matches)(/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/, {
        message: "휴대폰번호를 올바르게 입력해주세요",
    }),
    __metadata("design:type", String)
], UsersModel.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: "boolean",
        required: true,
        nullable: false,
    }),
    __metadata("design:type", Boolean)
], UsersModel.prototype, "isMarketing", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(SosialType),
    (0, swagger_1.ApiProperty)({
        enum: SosialType,
        required: false,
    }),
    __metadata("design:type", Object)
], UsersModel.prototype, "social", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UsersModel.prototype, "refreshToken", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], UsersModel.prototype, "accessToken", void 0);
exports.UsersModel = UsersModel;
//# sourceMappingURL=users.model.js.map