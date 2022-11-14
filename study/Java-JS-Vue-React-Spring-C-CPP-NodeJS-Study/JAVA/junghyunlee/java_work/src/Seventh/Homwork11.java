package Seventh;

import java.util.Scanner;

class arrNum2{
        int startNum, endNum, FixNum;

        Scanner scan;

        public void setScan2() {
            scan = new Scanner(System.in);
        }


        public void totalNum2() {
            int FixNum = (int)(Math.random() * 10) + 1;
            int []arr = new int[FixNum];

            int i, num = 0, cnt = 0;
            for (i = 0; i < FixNum; i++) {

                    num = (int) (Math.random() * 10) + 1;
                    arr[i] = num;
                    System.out.printf("arr[%d] = %d\n", i, arr[i]);

                if(arr[i] % 2 == 0) {
                    cnt++;

                }

            }
            System.out.println("짝수 출력 갯수 = " + cnt);
        }
    }


public class Homwork11 {
    public static void main(String[] args) {
        //이 배열에서 짝수가 몇 개 나왔는지 체크하는 매서드를 만든다.
        arrNum2 ar2 = new arrNum2();
        ar2.setScan2();
        ar2.totalNum2();
    }
}

