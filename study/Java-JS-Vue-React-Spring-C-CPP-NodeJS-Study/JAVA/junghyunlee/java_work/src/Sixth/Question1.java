package Sixth;

public class Question1 {
    public static void main(String[] args) {
        final int FIXVALUE = 3;

        double[] testArr = new double[FIXVALUE];

        for (int i = 0; i < FIXVALUE; i++){
            testArr[i] = Math.random();
            System.out.println(testArr[i]);
        }
    }
}
