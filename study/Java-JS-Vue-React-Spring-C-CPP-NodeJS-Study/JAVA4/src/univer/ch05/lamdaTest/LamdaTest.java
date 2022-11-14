package univer.ch05.lamdaTest;

interface MyInterface1 {
    public void method(int a, int b);
}

interface MyInterface2 {
    public void method(int a);
}

public class LamdaTest {
    public static void main(String[] args) {
        MyInterface1 f1, f2, f3;
        MyInterface2 f4, f5, f6;

        f1 = (int a, int b) -> {
            System.out.println(a + b);
        };
        f1.method(3, 4); // 7

        f2 = (a, b) -> {
            System.out.println(a + b);
        };
        f2.method(5, 6); // 11

        f3 = (a, b) -> System.out.println(a + b);
        f3.method(7, 8); // 15

        f4 = (int a) -> {
            System.out.println(a);
        };
        f4.method(9); // 9

        f5 = (a) -> System.out.println(a);
        f5.method(10); // 10

        f6 = a -> System.out.println(a);
        f6.method(11); // 11
    }
}
