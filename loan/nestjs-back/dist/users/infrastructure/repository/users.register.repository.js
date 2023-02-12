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
exports.UsersRegisterRepository = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../../common/infrastructures/prisma/prisma.service");
const hash_encoded_service_1 = require("../bcrypt/hash.encoded.service");
let UsersRegisterRepository = class UsersRegisterRepository {
    constructor(hash, prisma) {
        this.hash = hash;
        this.prisma = prisma;
    }
    async register(dto) {
        console.log("dto :", dto);
        const { userId, nickname, password, name, phone, address } = dto;
        try {
            const { response: { encoded: hashPassword }, } = await this.hash.encoded({ password: password });
            const [createUser] = await this.prisma.$transaction([
                this.prisma.users.create({
                    data: {
                        userId,
                        nickname,
                        password: hashPassword,
                        name,
                        phone,
                        address,
                    },
                }),
            ]);
            return {
                response: createUser,
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
UsersRegisterRepository = __decorate([
    (0, common_1.Injectable)(),
    (0, common_1.Dependencies)([hash_encoded_service_1.HashEncodedService, prisma_service_1.PrismaService]),
    __param(0, (0, common_1.Inject)("HASH_ENCODED")),
    __metadata("design:paramtypes", [hash_encoded_service_1.HashEncodedService,
        prisma_service_1.PrismaService])
], UsersRegisterRepository);
exports.UsersRegisterRepository = UsersRegisterRepository;
//# sourceMappingURL=users.register.repository.js.map