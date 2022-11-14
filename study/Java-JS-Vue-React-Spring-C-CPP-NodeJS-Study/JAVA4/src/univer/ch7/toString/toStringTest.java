package univer.ch7.toString;

class MyClass1 {} // 암묵적으로 Object 클래스를 상속한다.
class MyClass2 extends Object {
    @Override
    public String toString() {
        return "This MyClass2 class";
    }
}

public class toStringTest {
    public static void main(String[] args) {
        MyClass1 myClass1 = new MyClass1();
        MyClass2 myClass2 = new MyClass2();

        System.out.println(myClass1.toString()); // univer.ch7.toString.MyClass1@5594a1b5
        System.out.println(myClass2.toString()); // This MyClass2 class

        // .toString() 암묵적으로 적용
        System.out.println(myClass1); // univer.ch7.toString.MyClass1@5594a1b5
        System.out.println(myClass2); // This MyClass2 class
    }
}
