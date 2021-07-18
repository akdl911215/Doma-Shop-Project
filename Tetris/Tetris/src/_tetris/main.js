import { COLS, ROWS, BLOCK_SIZE } from '../_tetris/constants.js';
import { Board } from '../_tetris/board.js';

// 게임 초기화와 종료 로직 코드
const canvas = document.getElementById('board');
console.log('canvas : ', canvas);
const ctx = canvas.getContext('2d');
console.log('ctx : ', ctx);

// 상수를 사용해 캔버스의 크기를 계산
ctx.canvas.width = COLS * BLOCK_SIZE;
console.log('ctx.canvas.width : ', ctx.canvas.width);
ctx.canvas.height = ROWS * BLOCK_SIZE;
console.log('ctx.canvas.height : ', ctx.canvas.height);

// 블록의 크기를 변경한다.
ctx.scale(BLOCK_SIZE, BLOCK_SIZE);
console.log('ctx.scale : ', ctx.scale);

let board = new Board();
console.log('board : ', board);

function play() {
    board.reset();
    // console.table을 사용하면 숫자 값으로 보드를 확인가능
    console.table(board.grid);
}

export { play };
