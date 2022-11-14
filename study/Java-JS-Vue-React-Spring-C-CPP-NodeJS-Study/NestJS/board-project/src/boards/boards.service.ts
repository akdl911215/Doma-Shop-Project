import { Injectable } from '@nestjs/common';
import { Board, BoardStatus } from './board.model';
import { v1 as uuid } from 'uuid';
import { CreateBoardDto } from './dto/create-board.dto';
import { throws } from 'assert';
@Injectable()
export class BoardsService {
  private boards: Board[] = [];

  getAllBoards(): Board[] {
    return this.boards;
  }

  createBoard(createBoardDto: CreateBoardDto) {
    const { title, description } = createBoardDto;

    const board: Board = {
      id: uuid(),
      title,
      description,
      status: BoardStatus.PUBLIC,
    };

    this.boards.push(board);
    return board;
  }

  getBoardById(id: string): Board {
    return this.boards.find((board) => board.id === id);
  }

  deleteBoard(id: string): void {
    this.boards = this.boards.filter((board) => board.id !== id);
  }

  updateBoardStatus(id: string, status: BoardStatus): Board {
    const board = this.getBoardById(id);
    board.status = status;
    return board;
  }
}

/*
Service 란?
서비스는 소프트웨어 개발내의 공통 개념이며, NestJS, Javascript에서만
쓰이는 개념이 아니다.
@Injectable 데코레이터로 감싸져서 모듈에 제공되며, 이 서비스 인스턴스는
애플리케이션 전체에서 사용 될 수 있다.
서비스는 컨트롤러에서 데이터의 유효성 체크를 하거나 데이터베이스에
아이템을 생성하는 등의 작업을 하는 부분을 처리한다.
*/
