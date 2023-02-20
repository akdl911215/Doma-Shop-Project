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
const token_service_1 = require("./token.service");
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../common/infrastructures/prisma/prisma.service");
const passport_1 = require("@nestjs/passport");
const PASSPORT_MODULE = passport_1.PassportModule.register({ session: false });
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
    (0, common_1.Module)({
        imports: [JWT_MODULE, PASSPORT_MODULE],
        providers: [
            prisma_service_1.PrismaService,
            { provide: "TOKEN_SERVICE", useClass: token_service_1.TokenService },
        ],
        exports: [{ provide: "TOKEN_SERVICE", useClass: token_service_1.TokenService }],
    })
], TokenModule);
exports.TokenModule = TokenModule;
//# sourceMappingURL=token.module.js.map