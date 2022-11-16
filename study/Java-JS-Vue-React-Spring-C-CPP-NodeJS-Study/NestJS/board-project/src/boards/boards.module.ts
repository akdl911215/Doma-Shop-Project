import { Module } from '@nestjs/common';
import { BoardsController } from './boards.controller';
import { BoardsService } from './boards.service';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { BoardRepository } from './board.repository';
import { Board } from './board.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Board])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}

// Providers 란?
/*
프로바이더는 Nest의 기본 개념. 대부분의 기본 Nest 클래스는 서비스,
리포지토리, 팩토리, 헬퍼 등 프로바이더로 취급될 수 있다. 프로바이더의
주요 아이디어는 종속성으로 주입할 수 있다는 것이다. 즉, 객체는 서로
다양한 관계를 만들 수 있으며 객체의 인스턴스를 "연결"하는 기능은
대부분 Nest 런타임 시스템에 위임 될 수 있다.
*/
