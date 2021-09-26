import { COLS, ROWS, BLOCK_SIZE } from './constants.js';
import { Board } from './board.js';
import { Piece } from './piece.js';
import { KEY } from './Constants.js';

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

document.getElementById('playButton').onclick = play;
function play() {
    // alert('플레이 눌렸네..??');
    board.reset();

    // console.table을 사용하면 숫자 값으로 보드를 확인가능
    console.table(board.grid);

    board = board.getEmptyBoard();
    console.log('paly board : ', board);
    let piece = new Piece(ctx);
    console.log('paly price : ', piece);

    console.log('piece.draw() : ', piece.draw());
    board.piece = piece;
    console.log('board.piece : ', board.piece);

    // addEventListener() : 지정한 이벤트가 대상에 전달될 때마다
    // 호출할 함수를 설정한다
    document.addEventListener('keydown', (event) => {
        if (event.defaultPrevented) {
            return;
        }

        console.log('moves.KeyboardEvent.code : ', moves.KeyboardEvent.code);
        if (moves.KeyboardEvent.code) {
            alert('들어오니?', event);
            // 이벤트 버블링을 막는다
            event.preventDefault();

            // 조각의 새 상태를 얻는다
            let p = moves.KeyboardEvent.code(board.price);

            if (board.valid(p)) {
                // 이동이 가능한 상태라면 조각을 이동
                board.piece.move(p);

                // 그리기 전에 이전 좌표를 지운다
                ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

                board.piece.draw();
            }
        }
    });

    moves = {
        [KEY.LEFT]: (p) => ({ ...p, x: p.x - 1 }),
        [KEY.RIGHT]: (p) => ({ ...p, x: p.x + 1 }),
        [KEY.UP]: (p) => ({ ...p, y: p.y + 1 }),
    };
    console.log('moves : ', moves);

    const p = this.moves.KeyboardEvent.code(this.piece);
    console.log('this.moves.KeyboardEvent.code : ', this.moves.KeyboardEvent.code);
}

export { play, board };
