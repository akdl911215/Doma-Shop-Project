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
exports.MainBoardsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../common/infrastructures/prisma/prisma.service");
const _404_1 = require("../common/constants/http/errors/404");
const _400_1 = require("../common/constants/http/errors/400");
const _409_1 = require("../common/constants/http/errors/409");
let MainBoardsService = class MainBoardsService {
    constructor(prisma, logger) {
        this.prisma = prisma;
        this.logger = logger;
        prisma.$on("query", (event) => {
            logger.warn("Query: " + event.query);
            logger.warn("Duration: " + event.duration + "ms");
        });
    }
    async register(dto) {
        const { id: userId } = dto.user;
        const { description, title } = dto.requestUser;
        try {
            return {
                response: await this.prisma.mainBoard.create({
                    data: { userId, title, description },
                }),
            };
        }
        catch (e) {
            throw new Error("BOARD REGISTER PRISMA CREATE FAILED " + e);
        }
    }
    async delete(dto) {
        const { id: searchUserId } = dto.user;
        const user = await this.prisma.users.findUnique({
            where: { id: searchUserId },
        });
        if (!user)
            throw new common_1.NotFoundException(`${searchUserId}번 ${_404_1.NOTFOUND_USER}`);
        const { id: reqBoardId } = dto.requestBoardId;
        const board = await this.prisma.mainBoard.findFirst({
            where: {
                AND: [
                    {
                        userId: searchUserId,
                    },
                    {
                        id: reqBoardId,
                    },
                ],
            },
        });
        if (!board)
            throw new common_1.NotFoundException(`${reqBoardId}번 ${_404_1.NOTFOUND_BOARD}`);
        const { id: mainBoardId, userId } = board;
        const comment = await this.prisma.mainBoardComment.findMany({
            where: { mainBoardId },
        });
        if (!comment)
            throw new common_1.NotFoundException(_404_1.NOTFOUND_BOARD_COMMENT);
        if (userId === searchUserId) {
            try {
                let sql = '"commentId"=' + comment[0].id;
                for (let i = 1; i < comment.length; ++i) {
                    sql += ' OR "commentId"=' + comment[i].id;
                }
                const dbSql = "DELETE FROM re_comment WHERE " + sql + ";";
                await this.prisma.$transaction([
                    this.prisma.$queryRawUnsafe(`${dbSql}`),
                    this.prisma.mainBoardComment.deleteMany({ where: { mainBoardId } }),
                    this.prisma.mainBoard.delete({ where: { id: mainBoardId } }),
                ]);
                return { response: { delete: true } };
            }
            catch (e) {
                throw new common_1.BadRequestException(_400_1.NOT_EXIST_ID + `: ${e}`);
            }
        }
        else {
            throw new common_1.BadRequestException(_400_1.NO_MATCH_USER_ID);
        }
    }
    async list(dto) {
        const { page, take } = dto;
        const list = await this.prisma.mainBoard.count();
        if (!list)
            throw new common_1.BadRequestException(_400_1.NOT_EXIST_LIST);
        const skip = (page - 1) * take;
        const resultPage = Math.round(list / take);
        const resultTotalPage = Math.round(resultPage - (skip + 1));
        try {
            return {
                response: {
                    resultPage,
                    resultTotalPage,
                    currentList: await this.prisma.mainBoard.findMany({ skip, take }),
                },
            };
        }
        catch (e) {
            throw new common_1.BadRequestException(_400_1.NOT_EXIST_LIST + `: ${e}`);
        }
    }
    async read({ id, }) {
        const board = await this.prisma.mainBoard.findUnique({ where: { id } });
        if (!board)
            throw new common_1.NotFoundException(`${board.id}번 ${_404_1.NOTFOUND_BOARD}`);
        return { response: board };
    }
    async update(dto) {
        const { id: searchUserId } = dto.user;
        const user = await this.prisma.users.findUnique({
            where: { id: searchUserId },
        });
        if (!user)
            throw new common_1.NotFoundException(`${searchUserId}번 ${_404_1.NOTFOUND_USER}`);
        const board = await this.prisma.mainBoard.findUnique({
            where: { id: dto.requestBoard.id },
        });
        if (!board)
            throw new common_1.NotFoundException(`${board.id}번 ${_404_1.NOTFOUND_BOARD}`);
        const { id, userId } = board;
        if (userId === dto.user.id) {
            try {
                return {
                    response: await this.prisma.mainBoard.update({
                        where: { id },
                        data: {
                            title: dto.requestBoard.title,
                            description: dto.requestBoard.description,
                        },
                    }),
                };
            }
            catch (e) {
                throw new common_1.ConflictException(_409_1.UPDATE_FAILED + `: ${e}`);
            }
        }
        else {
            throw new common_1.BadRequestException(_400_1.NO_MATCH_USER_ID);
        }
    }
};
MainBoardsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        common_1.Logger])
], MainBoardsService);
exports.MainBoardsService = MainBoardsService;
//# sourceMappingURL=main.boards.service.js.map