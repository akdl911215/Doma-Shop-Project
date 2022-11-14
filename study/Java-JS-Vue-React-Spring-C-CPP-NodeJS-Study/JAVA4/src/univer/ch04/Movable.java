package univer.ch04;

interface Movable {
    void add(double dx, double dy);
    void sub(double dx, double dy);
}

interface Scalable {
    void mul(double s);
    void div(double s);
}

class Point implements Movable, Scalable {

    double x, y;

    @Override
    public void add(double dx, double dy) {
        x += dx; y += dy;
    }

    @Override
    public void sub(double dx, double dy) {
        x -= dx; y -= dy;
    }

    @Override
    public void mul(double s) {
        x *= s; y *= s;
    }

    @Override
    public void div(double s) {
        x /= s; y /= s;
    }
}