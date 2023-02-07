"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersModule = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/infrastructures/prisma/prisma.service");
const token_service_1 = require("../common/infrastructures/token/token.service");
const bcript_service_1 = require("../common/infrastructures/bcript/bcript.service");
const refresh_token_strategy_1 = require("../common/infrastructures/token/strategys/refresh.token.strategy");
const access_token_strategy_1 = require("../common/infrastructures/token/strategys/access.token.strategy");
const token_module_1 = require("../common/infrastructures/token/token.module");
const bcript_module_1 = require("../common/infrastructures/bcript/bcript.module");
const passport_1 = require("@nestjs/passport");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [passport_1.PassportModule, bcript_module_1.BcriptModule, token_module_1.TokenModule],
        controllers: [UsersController],
        providers: [
            access_token_strategy_1.AccessTokenStrategy,
            refresh_token_strategy_1.RefreshTokenStrategy,
            prisma_service_1.PrismaService,
            bcript_service_1.BcriptService,
            common_1.Logger,
            token_service_1.TokenService,
            {
                provide: "USERS_SERVICE",
                useClass: UsersService,
            },
            {
                provide: "STRATEGY_FIND_BY_ID",
                useClass: UsersService,
            },
        ],
        exports: [
            {
                provide: "USERS_SERVICE",
                useClass: UsersService,
            },
            {
                provide: "STRATEGY_FIND_BY_ID",
                useClass: UsersService,
            },
        ],
    })
], UsersModule);
exports.UsersModule = UsersModule;
//# sourceMappingURL=users.module.js.map