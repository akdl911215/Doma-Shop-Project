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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersLoginRepository = void 0;
const common_1 = require("@nestjs/common");
const _400_1 = require("../../../common/constants/http/errors/400");
const prisma_service_1 = require("../../../common/infrastructures/prisma/prisma.service");
const token_service_1 = require("../../../common/infrastructures/token/token.service");
const hash_decoded_service_1 = require("../bcrypt/hash.decoded.service");
let UsersLoginRepository = class UsersLoginRepository {
    constructor(prisma, compare, jwtToken) {
        this.prisma = prisma;
        this.compare = compare;
        this.jwtToken = jwtToken;
    }
    async login({ userId, password, }) {
        const user = await this.prisma.users.findUnique({ where: { userId } });
        if (!user)
            throw new common_1.BadRequestException(_400_1.NO_MATCH_USER_ID);
        const { response: { decoded }, } = await this.compare.decoded({
            password,
            hashPassword: user === null || user === void 0 ? void 0 : user.password,
        });
        const comparePassword = decoded;
        if (!comparePassword)
            throw new common_1.BadRequestException(_400_1.NO_MATCH_PASSWORD);
        const accessPayload = {
            id: user.id,
            userId: user.userId,
        };
        const refreshPayload = {
            id: user.id,
            userId: user.userId,
            phone: user.phone,
        };
        const { response: { accessToken, refreshToken }, } = await this.jwtToken.generateTokens(accessPayload, refreshPayload);
        try {
            await this.prisma.$transaction([
                this.prisma.users.update({
                    where: { id: user.id },
                    data: { refreshToken },
                }),
            ]);
            return {
                response: Object.assign(Object.assign({}, user), { accessToken,
                    refreshToken }),
            };
        }
        catch (e) {
            if (e instanceof common_1.InternalServerErrorException) {
                throw new common_1.InternalServerErrorException(e);
            }
            else {
                throw new Error(`${e}`);
            }
        }
    }
};
UsersLoginRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Dependencies)([prisma_service_1.PrismaService, hash_decoded_service_1.HashDecodedService, token_service_1.TokenService]),
    __param(1, (0, common_1.Inject)("HASH_DECODED")),
    __param(2, (0, common_1.Inject)("TOKEN_SERVICE")),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        hash_decoded_service_1.HashDecodedService,
        token_service_1.TokenService])
], UsersLoginRepository);
exports.UsersLoginRepository = UsersLoginRepository;
//# sourceMappingURL=users.login.repository.js.map