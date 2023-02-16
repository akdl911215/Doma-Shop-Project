"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersUpdateAddressAdaptorInputDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_model_1 = require("../../domain/entity/users.model");
class UsersUpdateAddressAdaptorInputDto extends (0, swagger_1.PickType)(users_model_1.UsersModel, [
    "address",
]) {
}
exports.UsersUpdateAddressAdaptorInputDto = UsersUpdateAddressAdaptorInputDto;
//# sourceMappingURL=users.update.address.adaptor.input.dto.js.map