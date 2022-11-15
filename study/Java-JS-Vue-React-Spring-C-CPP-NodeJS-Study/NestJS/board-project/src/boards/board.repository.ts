import { EntityRepository, Repository } from 'typeorm';
import { Board } from './board.entity';

// @EntityRepository > deorecarted 얘정
// https://velog.io/@pk3669/typeorm-0.3.x-EntityRepository-%EB%8F%8C%EB%A0%A4%EC%A4%98
// 보면서 리팩토링 나중에 해보기
@EntityRepository(Board)
export class BoardRepository extends Repository<Board> {
  //
}
