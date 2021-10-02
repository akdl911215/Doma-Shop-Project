// 보드 로직 파일
import { COLS, ROWS } from './Constants.js';
class Board {
    grid;// grid

    // 새 게임이 시작되면 보드를 초기화
    reset() {
        this.grid = this.getEmptyBoard();
        console.log('this.grid : ', this.grid )
        // document.getElementById('getEmptyBoard').onclick = play;
    }

    // 0으로 채워진 행렬을 얻는다.
    getEmptyBoard() {
        // Array.from() : 유사 배열 객체나 반복 가능한 객체를 얕게 복사해 새로운 Array 객체를 만든다
        // fill() : 배열의 시작 인덱스부터 끝 인덱스의 이전까지 정적인 값 하나로 채운다
        return Array.from({ length: ROWS }, () => Array(COLS).fill(0));
    }
}
export { Board };
