package Seventh;

import java.util.Scanner;

class Number {
    int startNum, endNum;

    Scanner scan;

    public void setScan() {
        scan = new Scanner(System.in);
    }

    public void setStartNum() {
        System.out.print("시작값을 입력하세요 : ");
        startNum = scan.nextInt();
    }

    public void setEndNum() {
        System.out.print("끝값을 입력하세요 : ");
        endNum = scan.nextInt();
    }

    public void printNum() {

        int cnt = 0, FixNum = endNum;
        int[] arr = new int[FixNum];

        for (int i = startNum; i <= endNum; i++) {
            if (cnt % 5 == 0) {

                System.out.println("");
            }
            cnt++;
            System.out.printf("%4d", cnt);
        }
    }

    public void printNum2() {

        int cnt = 0, FixNum = endNum, totalNum = 0, i = 0;
        int[] arr = new int[FixNum];

        for (i = startNum; i <= endNum; i++) {

           if (cnt % 5 == 0) {

                System.out.println("");
            }
            cnt++;
            System.out.printf("%4d", cnt);

            totalNum += i;
            }
        System.out.printf("\n\n%d ~ %d 까지의 총 합 = %d", startNum, endNum, totalNum);
    }

    public void printNum3() {

        int cnt = 0, FixNum = endNum, totalNum = 0, i = 0;
        int[] arr = new int[FixNum];

            for (i = startNum; i <= endNum; i++) {

                if (cnt % 5 == 0) {

                    System.out.println("");
                }
                cnt++;

                if (i % 2 == 0){
                System.out.printf("%4d", cnt);
                }
            }
    }


    public void printNum4() {

        int cnt = 0, FixNum = endNum, totalNum = 0, i = 0;
        int[] arr = new int[FixNum];

        for (i = startNum; i <= endNum; i++) {

            if (i % 5 == 0) {

                System.out.println("");
            }

            if (i % 2 == 0 && i % 3 == 0){
                System.out.printf("%3d", i);
            }
        }
    }



    public void printNum5() {

        int cnt = 0, FixNum = endNum, totalNum = 0, i = 0;
        int[] arr = new int[FixNum];

        for (i = startNum; i <= endNum; i++) {

            if (i % 5 == 0) {

                System.out.println("");
            }

            if (i % 2 == 0 || i % 3 == 0){
                System.out.printf("%3d", i);
            }
        }
    }

}

public class HomeWork1 {
    public static void main(String[] args) {
        // 1 ~ 10 까지 출력하는 클래스내의 매서드를 만들어보자
        Number owntwo = new Number();
        owntwo.setScan();
        owntwo.setStartNum();
        owntwo.setEndNum();
        owntwo.printNum();
    }
}
