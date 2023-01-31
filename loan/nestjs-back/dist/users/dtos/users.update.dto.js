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
exports.UpdateOutputUser = exports.UpdateInputUser = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_base_dto_1 = require("./users.base.dto");
const base_output_dto_1 = require("../../common/dtos/base.output.dto");
const class_validator_1 = require("class-validator");
class UpdateInputUser extends (0, swagger_1.PickType)(users_base_dto_1.UsersBaseDto, [
    "password",
    "name",
    "address",
    "phone",
]) {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, swagger_1.ApiProperty)({
        type: String,
        required: true,
        format: "password",
    }),
    (0, class_validator_1.Matches)(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/, {
        message: "컨펌 비밀번호는 최소 8자, 하나 이상의 문자, 하나의 숫자 및 하나의 특수문자입니다.",
    }),
    __metadata("design:type", String)
], UpdateInputUser.prototype, "confirmPassword", void 0);
exports.UpdateInputUser = UpdateInputUser;
class UpdateOutputUser extends base_output_dto_1.BaseOutputDto {
}
exports.UpdateOutputUser = UpdateOutputUser;
//# sourceMappingURL=users.update.dto.js.map