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
exports.MainBoardsUpdateOutput = exports.MainBoardsUpdateInput = void 0;
const swagger_1 = require("@nestjs/swagger");
const main_boards_base_dto_1 = require("./main.boards.base.dto");
const class_validator_1 = require("class-validator");
const base_output_dto_1 = require("../../common/dtos/base.output.dto");
class MainBoardsUpdateInput extends (0, swagger_1.PickType)(main_boards_base_dto_1.MainBoardsBaseDto, [
    "title",
    "description",
]) {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiProperty)({
        type: Number,
        required: true,
    }),
    __metadata("design:type", Number)
], MainBoardsUpdateInput.prototype, "id", void 0);
exports.MainBoardsUpdateInput = MainBoardsUpdateInput;
class MainBoardsUpdateOutput extends base_output_dto_1.BaseOutputDto {
}
exports.MainBoardsUpdateOutput = MainBoardsUpdateOutput;
//# sourceMappingURL=main.boards.update.dto.js.map