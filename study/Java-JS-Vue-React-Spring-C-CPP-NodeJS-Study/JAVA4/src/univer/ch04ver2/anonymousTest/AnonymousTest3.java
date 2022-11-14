package univer.ch04ver2.anonymousTest;

interface MyInterface {
    public void method111();
}

public class AnonymousTest3 {
    public static void main(String[] args) {
        MyInterface sub = new MyInterface() {
            @Override
            public void method111() {
                System.out.println("sub1");
            }
        };
        sub.method111();
    }
}
