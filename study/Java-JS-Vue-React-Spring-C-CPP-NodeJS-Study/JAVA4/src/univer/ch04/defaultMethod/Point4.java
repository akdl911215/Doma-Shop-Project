package univer.ch04.defaultMethod;

class Point4 implements Movable4 {

    double x, y;

    @Override
    public void add(double dx, double dy) {
        x += dx;
        y += dy;
    }

    @Override
    public void sub(double dx, double dy) {
        x -= dx;
        y -= dy;
    }
}
