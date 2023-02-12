"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersExistsUserIdAdaptorInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("../../domain/entity/users.model");
class UsersExistsUserIdAdaptorInputDto extends (0, swagger_1.PickType)(users_model_1.UsersModel, [
    "userId",
]) {
}
exports.UsersExistsUserIdAdaptorInputDto = UsersExistsUserIdAdaptorInputDto;
//# sourceMappingURL=users.exists.user.id.adaptor.input.dto.js.map