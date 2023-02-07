import { MainBoardsInterface } from "./interceptors/main.boards.interface";
export declare class MainBoardsController {
    private readonly boardsService;
    constructor(boardsService: MainBoardsInterface);
    private register;
    private list;
    private delete;
    private read;
    private update;
}
