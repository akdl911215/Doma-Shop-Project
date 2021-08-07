// 테트리스 조각 로직 파일
class Piece {
    x;
    y;
    color;
    shape;
    ctx;

    constructor(ctx) {
        console.log('ctx : ', ctx);
        this.ctx = ctx;
        this.spawn();
    }

    spawn() {
        this.color = 'blue';
        console.log('this.color : ', this.color);
        this.shape = [
            [2, 0, 0],
            [2, 2, 2],
            [0, 0, 0],
        ];
        console.log('this.shape : ', this.shape);

        // Starting position
        this.x = 3;
        this.y = 0;
    }

    draw() {
        this.ctx.fillstyle = this.color;
        console.log('this.ctx.fillstyle : ', this.ctx.fillstyle);
        this.shape.forEach((row, y) => {
            row.forEach((value, x) => {
                // this.x, this.y는 shape의 상단 왼쪽 좌표이다
                // shape 안에 있는 블록 좌표에 x, y를 더한다
                // 보드에서 블록의 좌표는 this.x + x 가 된다
                if (value > 0) {
                    // fillRect() : 현재 경로를 수정하지 않고 캔버스에
                    // 직접 그리므로 후속 호출 fill()이나 stroke() 호출이 영향을 미치지 않는다
                    this.ctx.fillRect(this.x + x, this.y + y, 1, 1);
                }
            });
        });
    }

    move(p) {
        this.x = p.x;
        this.y = p.y;
    }
}

export { Piece };
