package univer.ch06.exceptionTest;

// finally 블록

import java.io.DataInputStream;
import java.io.EOFException;

public class ExceptionTest5 {
    public static void main(String[] args) {
        DataInputStream dis = new DataInputStream(System.in);
        try {
            System.out.println("try 시작");
            int i = dis.readInt();
//        } catch (EOFException e1) {
//            System.out.println(e1.toString());
//            e1.printStackTrace();
        } catch (Exception e) {
            System.out.println("예외 처리 시작");
            System.out.println(e.toString());
        } finally {
            System.out.println("finally !!!" +
                    "");
        }
    }
}
