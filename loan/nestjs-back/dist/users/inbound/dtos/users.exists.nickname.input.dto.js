"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersExistsNicknameInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("../../domain/entity/users.model");
class UsersExistsNicknameInputDto extends (0, swagger_1.PickType)(users_model_1.UsersModel, [
    "nickname",
]) {
}
exports.UsersExistsNicknameInputDto = UsersExistsNicknameInputDto;
//# sourceMappingURL=users.exists.nickname.input.dto.js.map