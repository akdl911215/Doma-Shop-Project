"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUpdateNicknameAdaptorInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("../../domain/entity/users.model");
class UsersUpdateNicknameAdaptorInputDto extends (0, swagger_1.PickType)(users_model_1.UsersModel, [
    "nickname",
]) {
}
exports.UsersUpdateNicknameAdaptorInputDto = UsersUpdateNicknameAdaptorInputDto;
//# sourceMappingURL=users.update.nickname.adaptor.input.dto.js.map