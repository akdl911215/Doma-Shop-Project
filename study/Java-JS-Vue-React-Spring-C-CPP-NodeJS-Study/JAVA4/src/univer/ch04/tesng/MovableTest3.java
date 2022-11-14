package univer.ch04.tesng;

public class MovableTest3 {
    public static void main(String[] args) {
        Movable3 m1 = new MovablePoint3(5, 5);
        System.out.println(m1);
        m1.moveUp();
        System.out.println(m1);
        m1.moveRight();
        System.out.println(m1);
    }
}
