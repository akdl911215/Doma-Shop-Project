package Sixth;

import java.util.Random;

public class HomeWork2 {
    public static void main(String[] args) {
        // 1번 문제에서 만든 배열에 랜덤 값을 할당해보자!

        final int FixNum = 12;

        Random rand = new Random();

        int randNum = rand.nextInt(FixNum) + 1;
        System.out.println("랜덤값 = " + randNum);

        int []arr = new int[randNum];

        for(int i = 0; i < randNum; i++){
            //arr[i] = i + 1;
            //System.out.printf("%d번째 배열은 %입니다\n", i, arr[i]);

            arr[i] = i + 1;
            System.out.printf("arr[%d] = %d\n", i, arr[i]);
        }
    }
}

