package univer.ch04ver2.point;

class Point implements Movable, Scalable{
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

    @Override
    public void mul(double s) {

    }

    @Override
    public void div(double s) {

    }
}
