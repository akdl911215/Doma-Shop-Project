package univer.ch04ver2.anonymousTest;

class CSsuper {
    public int a = 10;
    public void method1() {
        System.out.println("super1");
    }
    public void method2() {
        System.out.println("super2");
    }
}

class CSub extends CSsuper {
    public int b = 20;
    public void method1() {
        System.out.println("sub1");
    }
    public void method3() {
        System.out.println("sub3");
    }
}

public class AnonymousTest {
    public static void main(String[] args) {
        CSub sub = new CSub();
        sub.method1(); // sub1
        sub.method2(); // super2
        sub.method3(); // sub3
        System.out.println(sub.a); // 10
        System.out.println(sub.b); // 20
    }
}
