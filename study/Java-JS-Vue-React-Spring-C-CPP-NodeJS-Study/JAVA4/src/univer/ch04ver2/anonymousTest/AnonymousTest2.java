package univer.ch04ver2.anonymousTest;

class CSsuper2 {
    public int a = 10;
    public void method11() {
        System.out.println("super1");
    }
    public void method22() {
        System.out.println("super2");
    }
}

public class AnonymousTest2 {
    public static void main(String[] args) {
        CSsuper2 sub = new CSsuper2() {
            public int b = 20;
            public void method11() {
                System.out.println("sub1");
            }
            public void method33() {
                System.out.println("sub3");
            }
        };
        sub.method11(); // sub1
        sub.method22(); // super2
        System.out.println(sub.a); // 10

//        sub.method33() // 컴파일 오류
//        System.out.println(sub.b); // 컴파일 오류
    }
}
