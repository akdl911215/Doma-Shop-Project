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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const _409_1 = require("../common/constants/http/errors/409");
let UsersService = class UsersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async register({ noteId: userNoteId, phone: userPhone, }) {
        const user = await this.prisma.users.findFirst({
            where: {
                OR: [
                    {
                        noteId: userNoteId,
                    },
                    {
                        phone: userPhone,
                    },
                ],
            },
        });
        if (user === null || user === void 0 ? void 0 : user.noteId)
            throw new common_1.ConflictException(_409_1.ALREADY_ACCOUNT_ID_EXISTS);
        if (user === null || user === void 0 ? void 0 : user.phone)
            throw new common_1.ConflictException(_409_1.ALREADY_PHONE_EXISTS);
        const { noteId, password, phone, address, name } = user;
        try {
            return {
                response: await this.prisma.users.create({
                    data: {
                        noteId,
                        password,
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
    delete({ id }) {
        return Promise.resolve(undefined);
    }
    find({ id }) {
        return Promise.resolve(undefined);
    }
    login({ noteId, password }) {
        return Promise.resolve(undefined);
    }
    update(dto) {
        return Promise.resolve(undefined);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map