"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersLoginAdaptorInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("../../domain/entity/users.model");
class UsersLoginAdaptorInputDto extends (0, swagger_1.PickType)(users_model_1.UsersModel, [
    'userId',
    'password',
]) {
}
exports.UsersLoginAdaptorInputDto = UsersLoginAdaptorInputDto;
//# sourceMappingURL=users.login.adaptor.input.dto.js.map