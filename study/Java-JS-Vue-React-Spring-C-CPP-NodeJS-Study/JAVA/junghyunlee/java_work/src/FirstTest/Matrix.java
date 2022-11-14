package FirstTest;

// 결과값체크
public class Matrix {
    private int numZero = 0;
    private int numOne = 1;
    private int row, col;
    private int[][] totalArr;
    int [][] matA = { {1,2}, {2,3}};
    int [][] matB = { {3,4}, {5,6}};

    public Matrix(int row, int col) {
        this.row = row;
        this.col = col;
        this.matA = matA;
        this.matB = matB;

        totalArr = new int[row][col];
    }


    public void sumMatrix() {
        for(int i = numZero; i < row; i++){
            for(int j = numZero; j < col; j++){
                totalArr[i][j] = matA[i][j] + matB[i][j];
            }
        }
    }

    public void printSumMatrix() {
        for (int i = numZero; i < row; i++) {
            for (int j = numZero; j < col; j++) {
                System.out.printf("%3d", totalArr[i][j]);
            }
            System.out.println("");
        }
    }

    public void mulMatrix(){
        totalArr[numZero][numZero] = matA[numZero][numZero] * matB[numZero][numZero] +
                matA[numZero][numOne] * matB[numOne][numZero];
        totalArr[numZero][numOne] = matA[numZero][numZero] * matB[numZero][numOne] +
                matA[numZero][numOne] * matB[numOne][numOne];

        totalArr[numOne][numZero] = matA[numOne][numZero] * matB[numZero][numZero] +
                matA[numOne][numOne] * matB[numOne][numZero];
        totalArr[numOne][numOne] = matA[numOne][numZero] * matB[numZero][numOne] +
                matA[numOne][numOne] * matB[numOne][numOne];
    }
}




