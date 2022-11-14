package Seventeenth;

import java.util.Arrays;

public class arrRandomNum {
    private int[] arr;
    private int randNum;
    private int numZreo = 0;
    private int numOne = 1;
    private int numTen = 10;
    private int numberOne;
    private int numberTwo;
    private int num;
    private int num2;
    private int i;
    private int j;
    private int randomArrdice;

    public void printArrRandomNum() {
        randNum = (int) (Math.random() * numTen) + numOne;
        arr = new int[randNum];
        System.out.println("생성된 배열의 갯수 = " + randNum);
        System.out.println("");

        for (int i = numZreo; i < randNum; i++) {
            arr[i] = (int) (Math.random() * randNum) + numOne;
            System.out.printf("arr[%d] = %d\n", i, arr[i]);
        }
    }

    public void printArrRandomNum(int numberOne, int numberTwo) {

        this.numberOne = numberOne;
        this.numberTwo = numberTwo;

        System.out.println("시작 값 = " + numberOne + " 끝 값 = " + numberTwo);

        randNum = (int) (Math.random() * numberTwo) + numOne;
        arr = new int[randNum];
        System.out.println("생성된 배열의 갯수 = " + randNum);
        System.out.println("");

        for (int i = numZreo; i < randNum; i++) {
            arr[i] = (int) (Math.random() * numberTwo) + numOne;
            System.out.printf("arr[%d] = %d\n", i, arr[i]);
        }
    }

    public void printArrRandomNumSort(int numberOne, int numberTwo) {
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;

        System.out.println("시작 값 = " + numberOne + " 끝 값 = " + numberTwo);

        randNum = (int) (Math.random() * numberTwo) + numOne;
        arr = new int[randNum];
        System.out.println("생성된 배열의 갯수 = " + randNum);
        System.out.println("");

        for (i = numZreo; i < randNum; i++) {
            arr[i] = (int) (Math.random() * numberTwo) + numOne;
            System.out.printf("arr[%d] = %d\n", i, arr[i]);
        }

        int tmp;
        for (int x = numOne; x < arr.length; x++) {
            for (int z = numOne; z > numZreo; z--) {
                if (arr[i - numOne] > arr[i]) {
                    tmp = arr[i - numOne];
                    arr[i - numOne] = arr[i];
                    arr[i] = tmp;
                }
            }
        }
    }
}

