package univer.ch05.lamdaExpressionTest;

interface Addable {
    int add(int a, int b);
}

public class LamdaExpressionTest {
    public static void main(String[] args) {

        // 익명 클래스
        Addable ad1 = new Addable() {
            @Override
            public int add(int a, int b) {
                return (a + b);
            }
        };
        System.out.println(ad1.add(100, 200)); // 300

        // 매개변수 자료형과 return문을 가진 람다식
        Addable ad2 = (int a, int b) -> {
            return (a + b);
        };
        System.out.println(ad2.add(10, 20)); // 30

        // 간단하 람다식
        Addable ad3 = (a, b) -> (a + b);
        System.out.println(ad3.add(1, 2)); // 3
    }
}
