package univer.ch06.exceptionTest;

// unchecked Exception 처리

public class ExceptionTest4 {
    public static void main(String[] args) {
        try {
            int i = 5 / 0;
        } catch (ArithmeticException e) {
            System.out.println("ArithmeticExeption");
            // ArithmeticException : 정수를 0으로 나눴을때 exception
            System.out.println(e);
        } catch (Exception e2) {
            // Exception은 예외처리의 제일 상위이기에 제일 마지막에 선언되야 컴파일 에러 발생안함
            System.out.println("Exception");
            System.out.println(e2);
        }
//        System.out.println(i);

        int[] a = new int[5];
        try {
            a[6] = 10;
        } catch (ArrayIndexOutOfBoundsException e) {
            System.out.println(e);
        }
    }
}
