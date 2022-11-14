package univer.ch04.defaultMethod;

public interface Movable4 {
    void add(double dx, double dy);
    void sub(double dx, double dy);
    default double change_sign(double v) {return v * (-1.0);}
}
