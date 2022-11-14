package univer.ch04.defaultMethod;

public class DefaultTest {
    public static void main(String[] args) {
        Point4 p = new Point4();

        p.x = 10.5;
        p.y = 11.6;

        System.out.println(p.change_sign(p.x));
    }
}
