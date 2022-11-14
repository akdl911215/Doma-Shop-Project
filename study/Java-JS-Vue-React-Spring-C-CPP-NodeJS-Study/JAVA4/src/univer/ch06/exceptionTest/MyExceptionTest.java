package univer.ch06.exceptionTest;

class MyExceptionTest2 extends Exception {
    public MyExceptionTest2() {
        super();
    }

    public String toString() {
        return "MyException";
    }
}

class MyClass {
    public void testFunc(int x) throws MyExceptionTest2 {
        if(x > 10) throw new MyExceptionTest2();
    }
}

public class MyExceptionTest {
    public static void main(String[] args) {
        MyClass myClass = new MyClass();

        try {
            myClass.testFunc(20);
        } catch (MyExceptionTest2 e) {
            System.out.println(e);
        }
    }
}
