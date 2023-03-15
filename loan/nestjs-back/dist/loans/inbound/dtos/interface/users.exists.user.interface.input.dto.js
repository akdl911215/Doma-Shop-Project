"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersExistsUserInterfaceInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("../../../../users/domain/entity/users.model");
class UsersExistsUserInterfaceInputDto extends (0, swagger_1.PickType)(users_model_1.UsersModel, [
    "userId",
]) {
}
exports.UsersExistsUserInterfaceInputDto = UsersExistsUserInterfaceInputDto;
//# sourceMappingURL=users.exists.user.interface.input.dto.js.map