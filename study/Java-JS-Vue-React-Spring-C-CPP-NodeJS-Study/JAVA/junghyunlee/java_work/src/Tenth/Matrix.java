package Tenth;

public class Matrix {
    private int row, col;
    private int[][] mat1 , mat2;
    private int[][] sumArr;

    public Matrix(int row, int col) {
        this.row = row;
        this.col = col;

        mat1 = new int[row][col];
        mat2 = new int[row][col];
        sumArr = new int[row][col];
    }

    public void allocRandomMatrix1() {
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                mat1[i][j] = (int) (Math.random() * 10);
            }
        }
    }

    public void allocRandomMatrix2() {
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                mat2[i][j] = (int) (Math.random() * 10);
            }
        }
    }

    public void printMatrix1() {
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.printf("%3d", mat1[i][j]);

            }
            System.out.println("");
        }
    }

    public void printMatrix2() {
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.printf("%3d", mat2[i][j]);

            }
            System.out.println("");
        }
    }
    // 배열의 합을 하는방법???
    // 5 5 7  6 2 2
    // 2 6 4  6 5 3
    // 3 7 6  5 2 0

    public void sumMatrix() {
        for(int i = 0; i < row; i++){
            for(int j = 0; j < col; j++){
                sumArr[i][j] = mat1[i][j] + mat2[i][j];
            }
        }
    }

    public void subMatrix() {
        for(int i = 0; i < row; i++){
            for(int j = 0; j < col; j++){
                sumArr[i][j] = mat1[i][j] - mat2[i][j];
            }
        }
    }

    public void multiMatrix() {
        for(int i = 0; i < row; i++){
            for(int j = 0; j < col; j++){
                sumArr[i][j] = mat1[i][j] * mat2[i][j];
            }
        }
    }

    public void printSumMatrix() {
        for (int i = 0; i < row; i++) {
            for (int j = 0; j < col; j++) {
                System.out.printf("%3d", sumArr[i][j]);

            }
            System.out.println("");
        }
    }
}

