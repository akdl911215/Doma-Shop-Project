package Sixth;

import java.util.Random;
import java.util.Scanner;

public class HomeWork3 {
    public static void main(String[] args) {
        // 1, 1, 3, 4, 5, 8, 12, 17, 25, 37, 54, 79, ...
        // 위 수열에서 20번째 숫자를 찾도록 프로그래밍 해보자!

        System.out.print("n번째 배열을 입력하시오 : ");
        Scanner scan = new Scanner(System.in);
        int num = scan.nextInt();
        //int i = 0;

        int []arr = new int[num + 1];

        if(num < 0) {
            System.out.println("잘못입력된 값입니다. 제대로 입력하세요!!");
        } else if(num < 2){
            System.out.printf("[%d]번째 배열 = %d\n", num , 1);
        } else if(num < 3){
            System.out.printf("[%d]번째 배열 = %d\n", 2, 3);
        }


        for(int i = 3; i <= num; i++){

            arr[0] = 1;
            arr[1] = 1;
            arr[2] = 3;
            arr[i] = arr[i - 1] + arr[i - 3];
            //System.out.printf("arr[%d] = %d\n", i , arr[i]);
            System.out.printf("[%d]번째 배열 = %d\n", i, arr[i]);
        }
    }
}