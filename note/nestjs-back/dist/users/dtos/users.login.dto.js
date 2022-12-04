"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginOutputUser = exports.LoginInputUser = void 0;
const swagger_1 = require("@nestjs/swagger");
const users_base_dto_1 = require("./users.base.dto");
const base_output_dto_1 = require("../../common/dtos/base.output.dto");
class LoginInputUser extends (0, swagger_1.PickType)(users_base_dto_1.UsersBaseDto, [
    'noteId',
    'password',
]) {
}
exports.LoginInputUser = LoginInputUser;
class LoginOutputUser extends base_output_dto_1.BaseOutputDto {
}
exports.LoginOutputUser = LoginOutputUser;
//# sourceMappingURL=users.login.dto.js.map