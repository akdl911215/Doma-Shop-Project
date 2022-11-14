package jacajungsuk;

// 1. 정수를 입력받는다.
// 2. 5만원, 1만원, 1천원, 500, 100, 50, 10, 1 로 구분한다.

import java.util.Scanner;

public class coinClassification {
    public static void main(String[] args) {

        int num, res, res2, res3, res4, res5, res6, res7, res8, res9, totalNum;

        System.out.print("바꾸고 싶은 액수를 입력하세요 : ");
        Scanner scan = new Scanner(System.in);
        num = scan.nextInt();
        totalNum = num;

        res = totalNum / 50000;
        totalNum = totalNum - (res * 50000);
        System.out.println("5만원 갯수 = " + res);

        res2 = totalNum / 10000;
        totalNum = totalNum - (res2 * 10000);
        System.out.println("1만원 갯수 = " + res2);

        res3 = totalNum / 5000;
        totalNum = totalNum - (res3 * 5000);
        System.out.println("5천원 갯수 = " + res3);

        res4 = totalNum / 1000;
        totalNum = totalNum - (res4 * 1000);
        System.out.println("1천원 갯수 = " + res4);

        res5 = totalNum / 500;
        totalNum = totalNum - (res5 * 500);
        System.out.println("500원 갯수 = " + res5);

        res6 = totalNum / 100;
        totalNum = totalNum - (res6 * 100);
        System.out.println("100원 갯수 = " + res6);

        res7 = totalNum / 50;
        totalNum = totalNum - (res7 * 50);
        System.out.println("50원 갯수 = " + res7);

        res8 = totalNum / 10;
        totalNum = totalNum - (res8 * 10);
        System.out.println("10원 갯수 = " + res8);

        res9 = totalNum / 1;
        totalNum = totalNum - (res9 * 1);
        System.out.println("1원 갯수 = " + res9);

    }
}
