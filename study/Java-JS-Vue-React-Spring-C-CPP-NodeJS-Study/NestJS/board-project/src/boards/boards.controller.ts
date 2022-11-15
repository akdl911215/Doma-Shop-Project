import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Patch,
  ValidationPipe,
  UsePipes,
} from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { BoardsService } from './boards.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatusValidationPipe } from './pipes/board-status-validation.pipe';

// https://www.youtube.com/watch?v=3JminDpCJNE
// 1:39:22

//
@Controller('boards')
export class BoardsController {
  constructor(private boardsService: BoardsService) {}

  @Get() // @Get('/') 와 동일
  getAllBoard(): Board[] {
    return this.boardsService.getAllBoards();
  }

  @Post()
  @UsePipes(ValidationPipe)
  createBoard(@Body() createBoardDto: CreateBoardDto): Board {
    return this.boardsService.createBoard(createBoardDto);
  }

  // import Param
  // 2개 이상 : findOne(@Param() params: string[])
  // 1개      : findOne(@Param('id') id: string)
  @Get('/:id')
  getBoardById(@Param('id') id: string): Board {
    return this.boardsService.getBoardById(id);
  }

  @Delete('/:id')
  deleteBoard(@Param('id') id: string): void {
    this.boardsService.deleteBoard(id);
  }

  @Patch('/:id/status')
  updateBoardStatus(
    @Param('id') id: string,
    @Body('status', BoardStatusValidationPipe) status: BoardStatus,
  ) {
    return this.boardsService.updateBoardStatus(id, status);
  }
}

// 위처럼 변경가능
// export class BoardsController {
//   boardsServide: BoardsService;

//   constructor(boardsService: BoardsService) {
//     this.boardsServide = boardsService;
//   }
// }

/*
DTO (Data Transfer Object)는 무엇인가?
계층간 데이터 교환을 위한 객체이다.
DB에서 데이터를 얻어 Service나 Controller 등으로 보낼 때
사용하는 객체를 말한다.
DTO는 데이터가 네트워크를 통해 전송되는 방법을 정의하는 객체이다.
interface나 class를 이용해서 정의 될 수 있다.
(하지만 클래스를 이용하는것을 NestJS에서 추천)

DTO를 쓰는 이유
- 데이터 유효성을 체크하는데 효율적
- 더 안정적인 코드로 만들어 줌. 타입스크립트의 타입으로도 사용
*/
