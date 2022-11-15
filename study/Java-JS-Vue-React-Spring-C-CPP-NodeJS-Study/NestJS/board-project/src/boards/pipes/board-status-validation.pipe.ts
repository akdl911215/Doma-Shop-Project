import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board.model';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any, metadata: ArgumentMetadata): any {
    value = value.toUpperCase();

    if (!this.isStatusValid(value)) {
      throw new BadRequestException(`${value} isn't in the status options`);
    }

    return value;
  }

  private isStatusValid(status: any) {
    const index = this.StatusOptions.indexOf(status);
    return index !== -1;
  }
}

/*
커스텀 파이프 구현 방법
먼저 PipeTransform이란 인터페이스를 새롭게 만들 커스텀 파이프에 구현해 줘야 한다.
이 PipeTransform 인터페이스는 모든 파이프에서 구현해줘야 하는 인터페이스이다.
그리고 이것과 함께 모든 파이프는 transform() 메소드가 필요하다.
이 메소드는 NestJS가 인자(arguments)를 처리하기 위해 사용된다.

transform() 메소드
이 메도스는 두 개의 파라미터를 가진다.
첫 번째 파라미터는 처리가 된 인자의 값(value)이며
두 번째 파라미터는 인자에 대한 메타 데이터를 포함한 객체이다.

transform()메소드에서 Return 된 값은 Route 핸들러로 전해진다.
만약 예(Exception)가 발생하면 클라이언트에 바로 전해짐.
*/
