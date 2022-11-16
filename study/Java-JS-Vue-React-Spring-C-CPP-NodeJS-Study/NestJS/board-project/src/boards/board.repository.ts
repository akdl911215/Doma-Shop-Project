// import { EntityRepository, Repository } from 'typeorm';
// import { Board } from './board.entity';
// import { CreateBoardDto } from './dto/create-board.dto';
// import { BoardStatus } from './board.status.enum';
//
// // @EntityRepository > deorecarted 얘정
// // https://velog.io/@pk3669/typeorm-0.3.x-EntityRepository-%EB%8F%8C%EB%A0%A4%EC%A4%98
// // 보면서 리팩토링 나중에 해보기
// @EntityRepository(Board)
// export class BoardRepository extends Repository<Board> {
//   async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
//     console.log('check');
//     const { title, description } = createBoardDto;
//
//     const board = this.create({
//       title,
//       description,
//       status: BoardStatus.PUBLIC,
//     });
//
//     await this.save(board);
//     return board;
//   }
// }
