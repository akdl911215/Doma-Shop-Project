package Tenth;

public class TenHomeWork2 {
    public static void main(String[] args) {
        Matrix mat = new Matrix(3,3);

        mat.allocRandomMatrix1();
        mat.printMatrix1();

        System.out.println("");


        mat.allocRandomMatrix2();
        mat.printMatrix2();

        System.out.println("");

        System.out.println("두 행렬의 합");

        mat.sumMatrix();
        mat.printSumMatrix();

        System.out.println("");
        System.out.println("두 행렬의 뺄셈");

        mat.subMatrix();
        mat.printSumMatrix();

        System.out.println("");
        System.out.println("두 행렬의 곱셈");


        mat.multiMatrix();
        mat.printSumMatrix();
    }
}
