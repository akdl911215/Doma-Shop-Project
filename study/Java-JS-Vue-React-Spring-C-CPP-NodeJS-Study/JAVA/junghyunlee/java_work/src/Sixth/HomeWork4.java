package Sixth;

import java.util.Random;
import java.util.Scanner;

public class HomeWork4 {
    public static void main(String[] args) {
        //float 형 배열에 랜덤 값 3 개를 입력해보자!
        //System.out.print("랜덤 값 3개를 입력하세요 : ");
        //Scanner scan = new Scanner(System.in);
        //float num = scan.nextFloat();
        //Scanner scan2 = new Scanner(System.in);
        //float num2 = scan.nextFloat();
        //Scanner scan3 = new Scanner(System.in);
        //float num3 = scan.nextFloat();
        Random rand = new Random();
        float[] arr = new float[3];

        for(int i = 0; i < 3; i++) {
            float num = rand.nextFloat() * 1000;
            //System.out.println("num = " + num);
            //.out.println("num값" + num);
            arr[i] = num;
            System.out.printf("arr[%d] = %f\n", i, arr[i]);

        }
        //System.out.printf("1번값 = %f\n2번값 = %f\n3번값 = %f", num, num2, num3);

    }
}
