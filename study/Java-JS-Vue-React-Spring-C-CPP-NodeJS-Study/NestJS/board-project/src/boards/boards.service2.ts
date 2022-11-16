// import { Injectable, NotFoundException } from '@nestjs/common';
// import { Board, BoardStatus } from './board.model';
// import { v1 as uuid } from 'uuid';
// import { CreateBoardDto } from './dto/create-board.dto';
//
// /*
// Pipe은 무엇인가?
// 파이프는 @Injectable() 데코레이터로 주석이 달린 클래스이다.
// 파이프는 data transformation과 data validation을 위해서 사용.
// 파이프는 컨트롤러 경로 처리기에 의해 처리되는 인수에 대해 작동
// Nest는 메소드가 호출되기 직전에 파이프를 삽입하고 파이프는 메소드로 향하는 인수를 수신하고 이에 대해 작동
// */
//
// @Injectable()
// export class BoardsService {
//   private boards: Board[] = [];
//
//   getAllBoards(): Board[] {
//     return this.boards;
//   }
//
//   createBoard(createBoardDto: CreateBoardDto) {
//     const { title, description } = createBoardDto;
//
//     const board: Board = {
//       id: uuid(),
//       title,
//       description,
//       status: BoardStatus.PUBLIC,
//     };
//
//     this.boards.push(board);
//     return board;
//   }
//
//   getBoardById(id: string): Board {
//     const found = this.boards.find((board) => board.id === id);
//
//     if (!found) {
//       throw new NotFoundException(`Can't find Board with id ${id}`);
//     }
//
//     return found;
//   }
//
//   deleteBoard(id: string): void {
//     const found = this.getBoardById(id);
//     this.boards = this.boards.filter((board) => board.id !== found.id);
//   }
//
//   updateBoardStatus(id: string, status: BoardStatus): Board {
//     const board = this.getBoardById(id);
//     board.status = status;
//     return board;
//   }
// }
//
// /*
// Service 란?
// 서비스는 소프트웨어 개발내의 공통 개념이며, NestJS, Javascript에서만
// 쓰이는 개념이 아니다.
// @Injectable 데코레이터로 감싸져서 모듈에 제공되며, 이 서비스 인스턴스는
// 애플리케이션 전체에서 사용 될 수 있다.
// 서비스는 컨트롤러에서 데이터의 유효성 체크를 하거나 데이터베이스에
// 아이템을 생성하는 등의 작업을 하는 부분을 처리한다.
// */
