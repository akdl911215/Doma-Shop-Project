"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenModule = void 0;
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const bcript_service_1 = require("../../../common/infrastructures/bcript/bcript.service");
const bcript_module_1 = require("../../../common/infrastructures/bcript/bcript.module");
const token_service_1 = require("../../../common/infrastructures/token/token.service");
const JWT_MODULE = jwt_1.JwtModule.registerAsync({
    imports: [config_1.ConfigModule],
    inject: [config_1.ConfigService],
    useFactory: async (configService) => ({
        secret: configService.get("JWT_SECRET"),
    }),
});
let TokenModule = class TokenModule {
};
TokenModule = __decorate([
    Module({
        imports: [JWT_MODULE, bcript_module_1.BcriptModule],
        providers: [token_service_1.TokenService, bcript_service_1.BcriptService],
        exports: [token_service_1.TokenService, JWT_MODULE],
    })
], TokenModule);
exports.TokenModule = TokenModule;
//# sourceMappingURL=token.module.js.map