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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRegisterUseCase = void 0;
const common_1 = require("@nestjs/common");
const _400_1 = require("../../../_common/constants/http/errors/400");
let UsersRegisterUseCase = class UsersRegisterUseCase {
    constructor(repository, requestUserId, requestPhone, requestNickname) {
        this.repository = repository;
        this.requestUserId = requestUserId;
        this.requestPhone = requestPhone;
        this.requestNickname = requestNickname;
    }
    async register(dto) {
        const { userId, nickname, phone, address, name, password } = dto;
        if (userId === "" ||
            nickname === "" ||
            phone === "" ||
            address === "" ||
            name === "" ||
            password === "") {
            throw new common_1.BadRequestException(_400_1.CONFIRM_REQUIRED_USER_INFORMATION);
        }
        await this.requestUserId.existsUserId({ userId });
        await this.requestPhone.existsPhone({ phone });
        await this.requestNickname.existsNickname({ nickname });
        return await this.repository.register(dto);
    }
};
UsersRegisterUseCase = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("REGISTER")),
    __param(1, (0, common_1.Inject)("EXISTS_USER_ID")),
    __param(2, (0, common_1.Inject)("EXISTS_PHONE")),
    __param(3, (0, common_1.Inject)("EXISTS_NICKNAME")),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], UsersRegisterUseCase);
exports.UsersRegisterUseCase = UsersRegisterUseCase;
//# sourceMappingURL=users.register.use.case.js.map