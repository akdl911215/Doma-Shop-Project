"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainBoardsModule = void 0;
const common_1 = require("@nestjs/common");
const main_boards_service_1 = require("./main.boards.service");
const main_boards_controller_1 = require("./main.boards.controller");
const prisma_service_1 = require("../prisma.service");
let MainBoardsModule = class MainBoardsModule {
};
MainBoardsModule = __decorate([
    (0, common_1.Module)({
        controllers: [main_boards_controller_1.MainBoardsController],
        providers: [
            prisma_service_1.PrismaService,
            common_1.Logger,
            {
                provide: "MAIN_BOARDS_SERVICE",
                useClass: main_boards_service_1.MainBoardsService,
            },
        ],
    })
], MainBoardsModule);
exports.MainBoardsModule = MainBoardsModule;
//# sourceMappingURL=main.boards.module.js.map