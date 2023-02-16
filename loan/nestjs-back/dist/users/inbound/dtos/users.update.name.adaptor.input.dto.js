"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUpdateNameAdaptorInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("../../domain/entity/users.model");
class UsersUpdateNameAdaptorInputDto extends (0, swagger_1.PickType)(users_model_1.UsersModel, [
    "name",
]) {
}
exports.UsersUpdateNameAdaptorInputDto = UsersUpdateNameAdaptorInputDto;
//# sourceMappingURL=users.update.name.adaptor.input.dto.js.map