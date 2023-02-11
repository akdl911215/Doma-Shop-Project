"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersExistsUserIdInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("../../domain/entity/users.model");
class UsersExistsUserIdInputDto extends (0, swagger_1.PickType)(users_model_1.UsersModel, [
    "userId",
]) {
}
exports.UsersExistsUserIdInputDto = UsersExistsUserIdInputDto;
//# sourceMappingURL=users.exists.user.id.input.dto.js.map