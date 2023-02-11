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
exports.RefreshTokenStrategy = void 0;
const passport_jwt_1 = require("passport-jwt");
const passport_1 = require("@nestjs/passport");
const common_1 = require("@nestjs/common");
const strategy_find_by_id_interface_1 = require("../../../../users/domain/adaptor/strategy.find.by.id.interface");
const _400_1 = require("../../../constants/http/errors/400");
const config_1 = require("@nestjs/config");
const token_service_1 = require("../token.service");
let RefreshTokenStrategy = class RefreshTokenStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, "JWT-REFRESH-TOKEN") {
    constructor(usersService, configService, jwtToken) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: configService.get("JWT_SECRET"),
            passReqToCallback: true,
        });
        this.usersService = usersService;
        this.configService = configService;
        this.jwtToken = jwtToken;
    }
    async validate(request, payload) {
        var _a, _b;
        const token = (_b = (_a = request === null || request === void 0 ? void 0 : request.headers) === null || _a === void 0 ? void 0 : _a.authorization) === null || _b === void 0 ? void 0 : _b.split("Bearer ")[1];
        const user = await this.usersService.strategyFindById({ id: payload.id });
        const { id, noteId, phone, refreshToken } = user.response;
        if (token !== refreshToken)
            throw new common_1.BadRequestException(_400_1.NOT_MATCH_REFRESH_TOKEN);
        const accessPayload = { id, noteId };
        const refreshPayload = { id, noteId, phone };
        const { response: { accessToken: generateAccessToken, refreshToken: generateRefreshToken, }, } = await this.jwtToken.generateTokens(accessPayload, refreshPayload);
        user.response.accessToken = generateAccessToken;
        user.response.refreshToken = generateRefreshToken;
        return user;
    }
};
RefreshTokenStrategy = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("STRATEGY_FIND_BY_ID")),
    __metadata("design:paramtypes", [typeof (_a = typeof strategy_find_by_id_interface_1.StrategyFindByIdInterface !== "undefined" && strategy_find_by_id_interface_1.StrategyFindByIdInterface) === "function" ? _a : Object, config_1.ConfigService,
        token_service_1.TokenService])
], RefreshTokenStrategy);
exports.RefreshTokenStrategy = RefreshTokenStrategy;
//# sourceMappingURL=refresh.token.strategy.js.map