package Seventh;

import java.util.Random;

public class test1 {
    public static void main(String[] args) {
        int FixNum = (int)(Math.random() * 5) + 5;
//
//        Random rand = new Random();
//        int randNum = rand.nextInt(10) + 1;
//        System.out.println("rand.nextInt(FixNum) + 1; = " + randNum);
//
//
//        System.out.println("랜덤값 = " + randNum);


        int []arr = new int[FixNum];
        //System.out.println("FixNum 값 = " + FixNum);

        int i, num = 0;
        for (i = 0; i < FixNum; i++) {
            num = (int) (Math.random() * 10) + 1;
            arr[i] = num;
            System.out.printf("arr[%d] = %d\n", i, arr[i]);

        }
    }

}
