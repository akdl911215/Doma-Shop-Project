package univer.ch05.lamdaTesst;

interface  MyInterface2 {
    public int method(int a, int b);
}

public class LamdaTest2 {
    public static void main(String[] args) {
        MyInterface2 f1, f2;

//        f1 = (a, b) -> return a + b; 컴파일 오류
        f1 = (a, b) -> { return a + b; };
        System.out.println(f1.method(3, 4)); // 7

        f2 = (a, b) -> a + b;
        System.out.println(f2.method(5, 6)); // 11
    }
}
