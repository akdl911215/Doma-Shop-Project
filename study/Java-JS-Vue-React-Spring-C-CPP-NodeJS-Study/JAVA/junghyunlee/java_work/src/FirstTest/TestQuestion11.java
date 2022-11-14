package FirstTest;

public class TestQuestion11 {
    public static void main(String[] args) {
        Matrix mtr = new Matrix(2,2);

        System.out.println("행렬의 덧셈을 시작합니다!");
        mtr.sumMatrix();
        mtr.printSumMatrix();
    }
}