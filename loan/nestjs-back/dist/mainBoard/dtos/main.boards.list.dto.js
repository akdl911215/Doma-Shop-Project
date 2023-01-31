"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MainBoardsListOutput = exports.MainBoardsListInput = void 0;
const swagger_1 = require("@nestjs/swagger");
const base_output_dto_1 = require("../../common/dtos/base.output.dto");
const base_pagination_1 = require("../../common/dtos/base.pagination");
class MainBoardsListInput extends (0, swagger_1.PickType)(base_pagination_1.BasePaginationInputDto, [
    "page",
    "take",
]) {
}
exports.MainBoardsListInput = MainBoardsListInput;
class MainBoardsListOutput extends base_output_dto_1.BaseOutputDto {
}
exports.MainBoardsListOutput = MainBoardsListOutput;
//# sourceMappingURL=main.boards.list.dto.js.map