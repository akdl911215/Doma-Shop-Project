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
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersLogoutRepository = void 0;
const common_1 = require("@nestjs/common");
const _404_1 = require("../../../common/constants/http/errors/404");
const prisma_service_1 = require("../../../common/infrastructures/prisma/prisma.service");
let UsersLogoutRepository = class UsersLogoutRepository {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async logout(dto) {
        const { id } = dto;
        console.log("id", id);
        const user = await this.prisma.users.findUnique({ where: { id } });
        console.log("user", user);
        if (!user)
            throw new common_1.NotFoundException(_404_1.NOTFOUND_USER);
        try {
            const [updateUsers] = await this.prisma.$transaction([
                this.prisma.users.update({
                    where: { id },
                    data: { refreshToken: null },
                }),
            ]);
            if (updateUsers.refreshToken === null) {
                return { response: { logout: true } };
            }
            else {
                return { response: { logout: false } };
            }
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
UsersLogoutRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Dependencies)([prisma_service_1.PrismaService]),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersLogoutRepository);
exports.UsersLogoutRepository = UsersLogoutRepository;
//# sourceMappingURL=users.logout.repository.js.map