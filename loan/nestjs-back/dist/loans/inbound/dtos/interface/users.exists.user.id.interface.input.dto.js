"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersExistsUserIdInterfaceInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("../../../../users/domain/entity/users.model");
class UsersExistsUserIdInterfaceInputDto extends (0, swagger_1.PickType)(users_model_1.UsersModel, [
    "userId",
]) {
}
exports.UsersExistsUserIdInterfaceInputDto = UsersExistsUserIdInterfaceInputDto;
//# sourceMappingURL=users.exists.user.id.interface.input.dto.js.map