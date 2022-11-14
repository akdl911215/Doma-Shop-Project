package Seventh;

import java.util.Scanner;

class arrNum{
    int startNum, endNum, FixNum;

    Scanner scan;

    public void setScan() {
        scan = new Scanner(System.in);
    }


    public void totalNum() {
        int FixNum = (int)(Math.random() * 10) + 1;
        int []arr = new int[FixNum];

        int i, num = 0;
        for (i = 0; i < FixNum; i++) {
            num = (int) (Math.random() * 10) + 1;
            arr[i] = num;
            System.out.printf("arr[%d] = %d\n", i, arr[i]);

        }
    }
}


public class HomeWork10 {
    public static void main(String[] args) {
        // 랜덤한 개수의 배열을 만든다. (범위는 적당히 알아서 지정하자)
        arrNum ar = new arrNum();
        ar.setScan();
        ar.totalNum();
    }
}
