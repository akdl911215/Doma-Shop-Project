"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUpdatePhoneAdaptorInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("../../domain/entity/users.model");
class UsersUpdatePhoneAdaptorInputDto extends (0, swagger_1.PickType)(users_model_1.UsersModel, [
    "phone",
]) {
}
exports.UsersUpdatePhoneAdaptorInputDto = UsersUpdatePhoneAdaptorInputDto;
//# sourceMappingURL=users.update.phone.adaptor.input.dto.js.map