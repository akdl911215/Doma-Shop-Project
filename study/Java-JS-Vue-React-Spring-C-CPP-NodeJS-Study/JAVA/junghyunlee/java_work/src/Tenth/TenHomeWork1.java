package Tenth;

class MatrixA {
    int a = 0, b = 0;

    int[][] arr = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};

    public MatrixA(int[][] arr, int a, int b) {
        this.a = a;
        this.b = b;

    }

    public void printMatrixA() {
        for (int i = 0; i < a; i++) {
            for (int j = 0; j < b; j++) {
                // 이중 배열의 경우 안쪽에 있는 녀석이 큰 공간이다.
                /// 바깥쪽에 있는 배열은 큰 공간을 다시 나눈 작은 공간이다.
                System.out.printf("%2d", arr[i][j]);
            }
            System.out.println("");
        }
    }

}
public class TenHomeWork1 {
    public static void main(String[] args) {
        int[][] arr = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
        MatrixA mta = new MatrixA(arr,3, 3);

        mta.printMatrixA();
    }
}
