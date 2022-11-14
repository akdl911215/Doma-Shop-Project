package Seventeenth;

import java.util.Random;
import java.util.Scanner;

public class inputScanner {

    private int AverageNum;
    private int numOne, numTwo;
    private final int numberTwo = 2;

    Scanner scan = new Scanner(System.in);


    public void printScanner() {
        System.out.print("숫자를 입력하시오 : ");
        int num = scan.nextInt();
        System.out.println("입력한 값은 = " + num);
    };

    public void printScanner(int numOne, int numTwo) {
        this.numOne = numOne;
        this.numTwo = numTwo;

        System.out.println("입력한 값은 = " + numOne);
        System.out.println("입력한 값은 = " + numTwo);
    };

    public void NumberAverage() {
        int totalNum = ((numOne + numTwo) / numberTwo);
        AverageNum = totalNum;
        System.out.printf("입력한 %d 와 %d 값의 평균 값 = %d\n", numOne, numTwo, AverageNum);

    };
}