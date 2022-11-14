package Seventeenth;

public class Matrix {
    private int statNum;
    private int endNum;
    private int numZero = 0;
    private int numOne = 1;
    private int numTwo = 2;
    private int [][]arrA;
    private int [][]arrB;
    private int i;
    private int j;
    private int result;

    private int row, col;
    private int[][] mat;

    public Matrix(int row, int col) {
        this.row = row;
        this.col = col;

        mat = new int[row][col];
    }

    private boolean checkDimension(Seventeenth.Matrix A, Seventeenth.Matrix B) {

        int Arow = A.getRow();
        int Brow = B.getRow();
        int Acol = A.getCol();
        int Bcol = B.getCol();

        return (Arow == Brow) && (Acol == Bcol);
    }

    private boolean checkDimension(Seventeenth.Matrix mat) {

        int row = mat.getRow();
        int col = mat.getCol();

        return (this.row == row) && (this.col == col);
    }



    public void addMatrix(Seventeenth.Matrix mat) {
        if(checkDimension(mat)) {
            int[][] srcMat = mat.getMat();

            for (int i = 0; i < row; i++) {
                for (int j = 0; j < col; j++) {
                    this.mat[i][j] = this.mat[i][j] + srcMat[i][j];
                }
            }
        }
    }

    public int getRow() {
        return row;
    }
    public int getCol() {
        return col;
    }
    public int[][] getMat() {
        return mat;
    }

    public void printMatrix() {
        for(int i = 0; i < row; i++) {
            for(int j = 0; j < col; j++) {
                System.out.printf("%4d", mat[i][j]);
            }
            System.out.println("");
        }
    }

}



