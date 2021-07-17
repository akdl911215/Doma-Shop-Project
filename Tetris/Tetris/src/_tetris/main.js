import COLS from './constants';
import ROWS from './constants';
import BLOCK_SIZE from './constants';

// 게임 초기화와 종료 로직 코드
const canvas = document.getElementById('board');
const ctx = document.getElementById('2d');

// 상수를 사용해 캔버스의 크기를 계산
ctx.canvas.width = COLS * BLOCK_SIZE;
console.log(ctx.canvas.width);
ctx.canvas.height = ROWS * BLOCK_SIZE;
console.log(ctx.canvas.height);

// 블록의 크기를 변경한다.
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);

let board = new Board();

function play() {
    board.reset();
    // console.table을 사용하면 숫자 값으로 보드를 확인가능
    console.table(board.grid);
}
