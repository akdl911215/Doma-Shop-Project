"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const bcript_incoded_interface_1 = require("../bcript/interfaces/bcript.incoded.interface");
let TokenService = class TokenService {
    constructor(jwtService, configService, hash) {
        this.jwtService = jwtService;
        this.configService = configService;
        this.hash = hash;
    }
    async generateTokens(accessPayload, refreshPayload) {
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(accessPayload, {
                secret: this.configService.get("JWT_SECRET"),
                expiresIn: this.configService.get("JWT_ACCESS_EXPIRE_IN"),
            }),
            this.jwtService.signAsync(refreshPayload, {
                secret: this.configService.get("JWT_SECRET"),
                expiresIn: this.configService.get("JWT_REFRESH_EXPIRE_IN"),
            }),
        ]);
        return {
            response: {
                accessToken,
                refreshToken,
            },
        };
    }
};
TokenService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)("IN_CODED")),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService, typeof (_a = typeof bcript_incoded_interface_1.BcriptIncodedInterface !== "undefined" && bcript_incoded_interface_1.BcriptIncodedInterface) === "function" ? _a : Object])
], TokenService);
exports.TokenService = TokenService;
//# sourceMappingURL=token.service.js.map