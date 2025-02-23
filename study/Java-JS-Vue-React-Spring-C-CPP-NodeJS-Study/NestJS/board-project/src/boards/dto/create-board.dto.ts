/*
DTO 파일 작성
클래스는 인터페이스와 다르게 런타임에서 작동하기 때문에 파이프
같은 기능을 이용할 때 유용하다.
그래서 클래스를 시작해서 DTO를 작성한다.
*/

// https://github.com/typestack/class-validator#manual-validation
import { IsNotEmpty } from 'class-validator';

export class CreateBoardDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
