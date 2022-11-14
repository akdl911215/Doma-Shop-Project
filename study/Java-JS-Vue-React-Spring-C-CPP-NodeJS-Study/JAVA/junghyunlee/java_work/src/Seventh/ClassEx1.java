package Seventh;

import java.util.Random;

public class ClassEx1 {
    public static void main(String[] args) {
        // 스타트업 4명
        // 급여 2400~3600 랜덤값출력

        int FixNum = 4;
        int []starMember = new int[FixNum];

        int i;
//        starMember[i] = (int)(Math.random() * 12000001) + 24000000;
//        System.out.println("starMember[1] = " + starMember[i]);
//
//        starMember[i] = (int)(Math.random() * 12000001) + 24000000;
//        System.out.println("starMember[2] = " + starMember[i]);
//
//        starMember[i] = (int)(Math.random() * 12000001) + 24000000;
//        System.out.println("starMember[3] = " + starMember[i]);
//
//        starMember[i] = (int)(Math.random() * 12000001) + 24000000;
//        System.out.println("starMember[4] = " + starMember[i]);

        for(i = 0; i < FixNum; i++) {
            starMember[i] = (int)(Math.random() * 12000001) + 24000000;
            System.out.printf("스타트멤버 %d의 연봉 = %d\n", i + 1, starMember[i]);
        }
    }
}
