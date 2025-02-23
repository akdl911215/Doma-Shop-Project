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
exports.MainBoardsReadOutput = exports.MainBoardsReadInput = void 0;
const class_validator_1 = require("class-validator");
const base_output_dto_1 = require("../../common/dtos/base.output.dto");
class MainBoardsReadInput {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], MainBoardsReadInput.prototype, "id", void 0);
exports.MainBoardsReadInput = MainBoardsReadInput;
class MainBoardsReadOutput extends base_output_dto_1.BaseOutputDto {
}
exports.MainBoardsReadOutput = MainBoardsReadOutput;
//# sourceMappingURL=main.boards.read.dto.js.map