package Sixth;

import java.util.Scanner;

public class InputArrayFibonacci {
    public static void main(String[] args) {
        // 문제.
        // 위의 코드를 n 번째 항을 찾는 형태로 변경해보자!
        // 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89 ......

        System.out.print("n 번째 피보나치 항을 입력하시오 : ");

        final int FIXVALUE = 1;
        Scanner scan = new Scanner(System.in);
        int num = scan.nextInt();
//        int[] arr = new int[num];
//        int i = 0;

        if(num <= 0) {
            System.out.println("잘못된 입력입니다!");
            return;
        } else if(num < 3) {
            System.out.printf("%d 번째 피보나치 항은 = %d\n", num, FIXVALUE);
            // return 이후 현재 프로그램은 더 이상 동작하지 않는다.
            // 실제로는 매서드를 종료한 것인데
            // 현재는 아직 클래스 학습하지 않았으므로
            // main 을 종료한다고만 알아두자!
            return;
        }
        //int i = 0;
        // 초기에 배열의 개수를 할당할때는 대괄호 안에 개수를 적는다.
        // 사용할 때는 0 부터 시작한다는 것을 주의하도록 한다.

        int[] arr = new int[num];
        arr[0] = 1;
        arr[1] = 1;

        for(int i = 2; i < num; i++) {
            arr[i] = arr[i - 2] + arr[i - 1];
            System.out.printf("%d 번째 피보나치 항은 = %d\n", i, arr[i]);
        }
        //System.out.printf("%d 번째 피보나치 항은 = %d\n", num, FIXVALUE);
    }
}