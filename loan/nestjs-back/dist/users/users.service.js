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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const _409_1 = require("../common/constants/http/errors/409");
const _404_1 = require("../common/constants/http/errors/404");
const _400_1 = require("../common/constants/http/errors/400");
const token_service_1 = require("../common/infrastructures/token/token.service");
let UsersService = class UsersService {
    constructor(prisma, logger, hash, compare, jwtToken) {
        this.prisma = prisma;
        this.logger = logger;
        this.hash = hash;
        this.compare = compare;
        this.jwtToken = jwtToken;
        prisma.$on("query", (event) => {
            logger.warn("Query: " + event.query);
            logger.warn("Duration: " + event.duration + "ms");
        });
    }
    async strategyFindById({ id, }) {
        const user = await this.prisma.users.findUnique({ where: { id } });
        if (!user)
            throw new common_1.NotFoundException(`${id}번 ${_404_1.NOTFOUND_USER}`);
        return { response: user };
    }
    async register({ noteId, phone, name, password, address, }) {
        const user = await this.prisma.users.findFirst({
            where: {
                OR: [
                    {
                        noteId,
                    },
                    {
                        phone,
                    },
                ],
            },
        });
        if (user === null || user === void 0 ? void 0 : user.noteId)
            throw new common_1.ConflictException(_409_1.ALREADY_ACCOUNT_ID_EXISTS);
        if (user === null || user === void 0 ? void 0 : user.phone)
            throw new common_1.ConflictException(_409_1.ALREADY_PHONE_EXISTS);
        try {
            return {
                response: await this.prisma.users.create({
                    data: {
                        noteId,
                        password: await this.hash.incoded(password),
                        phone,
                        address,
                        name,
                    },
                }),
            };
        }
        catch (e) {
            throw new Error("USER REGISTER PRISMA CREATE FAILED " + e);
        }
    }
    async login({ noteId, password, }) {
        const user = await this.prisma.users.findUnique({ where: { noteId } });
        if (!user)
            throw new common_1.NotFoundException(_404_1.NOTFOUND_USER);
        const comparePassword = await this.compare.decoded(password, user === null || user === void 0 ? void 0 : user.password);
        if (!comparePassword)
            throw new common_1.BadRequestException(`${noteId} ${_400_1.NO_MATCH_PASSWORD}`);
        const accessPayload = {
            id: user.id,
            noteId: user.noteId,
        };
        const refreshPayload = {
            id: user.id,
            noteId: user.noteId,
            phone: user.phone,
        };
        const { response: { accessToken, refreshToken }, } = await this.jwtToken.generateTokens(accessPayload, refreshPayload);
        try {
            await this.prisma.users.update({
                where: { id: user.id },
                data: { refreshToken },
            });
            return {
                response: Object.assign(Object.assign({}, user), { accessToken,
                    refreshToken }),
            };
        }
        catch (e) {
            throw new common_1.ConflictException(_409_1.REFRESH_TOKEN_MODIFY_FAILED + ` ${e}`);
        }
    }
    async findOn(dto) {
        const { id } = dto.requestUser;
        const { id: userId } = dto.user;
        const user = await this.prisma.users.findUnique({ where: { id } });
        if (!user)
            throw new common_1.NotFoundException(`${id}번 ${_404_1.NOTFOUND_USER}`);
        if (id === userId) {
            return { response: user };
        }
        else {
            throw new common_1.BadRequestException(_400_1.NO_MATCH_USER_ID);
        }
    }
    async delete(dto) {
        const user = await this.prisma.users.findUnique({
            where: { id: dto.requestUserId.id },
        });
        const { id } = user;
        if (!user)
            throw new common_1.NotFoundException(`${id}번 ${_404_1.NOTFOUND_USER}`);
        if (dto.user.id === id) {
            try {
                await this.prisma.users.delete({ where: { id } });
                return { response: { delete: true } };
            }
            catch (e) {
                throw new Error("USER_DELETE_FAILED " + e);
            }
        }
        else {
            throw new common_1.BadRequestException(_400_1.NO_MATCH_USER_ID);
        }
    }
    async update(dto) {
        console.log("dto : ", dto);
        const dbUser = await this.prisma.users.findUnique({
            where: { id: dto.user.id },
        });
        if (!dbUser)
            throw new common_1.NotFoundException(_404_1.NOTFOUND_USER);
        const { id: dbUserId, password: dbPassword, name: dbName, address: dbAddress, phone: dbPhone, } = dbUser;
        const { name: reqName, address: reqAddress, phone: reqPhone, password: reqPassword, } = dto.requestUser;
        const password = reqPassword === "" ? dbUser.password : reqPassword;
        const address = reqAddress === "" ? dbUser.address : reqAddress;
        const name = reqName === "" ? dbUser.name : reqName;
        const phone = reqPhone === "" ? dbUser.phone : reqPhone;
        if (dto.user.id === dbUser.id) {
            try {
                return {
                    response: await this.prisma.users.update({
                        where: { id: dbUser.id },
                        data: {
                            password: await this.hash.incoded(password),
                            address,
                            name,
                            phone,
                        },
                    }),
                };
            }
            catch (e) {
                throw new common_1.ConflictException(_409_1.UPDATE_FAILED + ` ${e}`);
            }
        }
        else {
            throw new common_1.BadRequestException(_400_1.NO_MATCH_USER_ID);
        }
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, common_1.Inject)("IN_CODED")),
    __param(3, (0, common_1.Inject)("DE_CODED")),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        common_1.Logger, Object, Object, token_service_1.TokenService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map