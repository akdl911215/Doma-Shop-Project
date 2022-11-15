import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BoardStatus } from './board.model';

@Entity()
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: BoardStatus;
}

/*
@Entity()
- Entity() 데코레이션 클래스는 Board 클래스가 엔티티임을 나타내는 데
  사용된다.
  SQL 문법에서 CREATE TABLE board 부분이다.

@PrimaryGeneratedColumn()
- PrimaryGeneratedColumn() 데코레이터 클래스는 id 열이 Board 엔티티의
  기본 키 열임을 나타내는 데 사용

@Column()
- Column() 데코레이터 클래스는 Board 엔티티의 title 및 description 과
  같은 다른 열을 나타내는 데 사용 된다
*/
