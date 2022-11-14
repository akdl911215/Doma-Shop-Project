package univer.ch06.exceptionTest;

import java.io.DataInputStream;

public class ExceptionTest5ver2 {
    public static void main(String[] args) {
        DataInputStream dis = new DataInputStream(System.in);
        try {
            System.out.println("시작");
            throw new Exception();
        } catch (Exception e) {
            System.out.println("예외 처리 시작");
            System.out.println(e.toString());
        } finally {
            System.out.println("finally !!!" +
                    "");
        }
    }
}
