"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOutputUser = exports.UpdateInputUser = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_base_dto_1 = require("./users.base.dto");
const base_output_dto_1 = require("../../common/dtos/base.output.dto");
class UpdateInputUser extends (0, swagger_1.PickType)(users_base_dto_1.UsersBaseDto, [
    'password',
    'name',
    'address',
    'phone',
]) {
}
exports.UpdateInputUser = UpdateInputUser;
class UpdateOutputUser extends base_output_dto_1.BaseOutputDto {
}
exports.UpdateOutputUser = UpdateOutputUser;
//# sourceMappingURL=users.update.dto.js.map