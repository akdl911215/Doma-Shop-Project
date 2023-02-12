"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersExistsPhoneAdaptorInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("../../domain/entity/users.model");
class UsersExistsPhoneAdaptorInputDto extends (0, swagger_1.PickType)(users_model_1.UsersModel, [
    "phone",
]) {
}
exports.UsersExistsPhoneAdaptorInputDto = UsersExistsPhoneAdaptorInputDto;
//# sourceMappingURL=users.exists.phone.adaptor.input.dto.js.map