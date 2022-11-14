package univer.ch06.exceptionTest;

// unchecked Exception 발생 예

public class ExceptionTest3 {
    public static void main(String[] args) {
        int i = 5 / 0;
        System.out.println(i);

        int[] a = new int[5];
        a[6] = 10;
    }
}
