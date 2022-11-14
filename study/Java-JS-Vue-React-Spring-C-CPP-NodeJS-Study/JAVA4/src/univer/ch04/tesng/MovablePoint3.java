package univer.ch04.tesng;

class MovablePoint3 implements Movable3 {

    private int x, y;

    public MovablePoint3(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public String toString() {
        return "Point at (" + x + ", " + y + ")";
    }

    @Override
    public void moveUp() {
        y++;
    }

    @Override
    public void moveDown() {
        y--;
    }

    @Override
    public void moveLeft() {
        x--;
    }

    @Override
    public void moveRight() {
        x++;
    }
}
