import { Logger, Module } from "@nestjs/common";
import { MainBoardsService } from "./main.boards.service";
import { MainBoardsController } from "./main.boards.controller";
import { PrismaService } from "../prisma.service";

@Module({
  controllers: [MainBoardsController],
  providers: [
    PrismaService,
    Logger,
    {
      provide: "MAIN_BOARDS_SERVICE",
      useClass: MainBoardsService,
    },
  ],
})
export class MainBoardsModule {}
