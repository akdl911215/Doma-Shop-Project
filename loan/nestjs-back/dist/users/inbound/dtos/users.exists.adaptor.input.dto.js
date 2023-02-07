"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersExistsAdaptorInputDto = void 0;
const users_model_1 = require("../../domain/entity/users.model");
const swagger_1 = require("@nestjs/swagger");
class UsersExistsAdaptorInputDto extends (0, swagger_1.PickType)(users_model_1.UsersModel, [
    "userId",
    "phone",
    "nickname",
]) {
}
exports.UsersExistsAdaptorInputDto = UsersExistsAdaptorInputDto;
//# sourceMappingURL=users.exists.adaptor.input.dto.js.map