// interface : 변수의 타입만을 체크
// classes : 변수의 타입도 체크하고 인스턴스 또한 생성

export interface Board {
  id: string;
  title: string;
  description: string;
  status: BoardStatus;
}

export enum BoardStatus {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
}
