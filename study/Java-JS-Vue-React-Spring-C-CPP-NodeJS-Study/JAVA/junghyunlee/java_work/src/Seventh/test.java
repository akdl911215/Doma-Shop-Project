package Seventh;

import java.util.Scanner;

public class test {
    public static void main(String[] args) {

        int i, randNum, cnt = 0;
        int[] checkDup = new int[17];

        for(i = 0; i < 17; i++) {
            checkDup[i] = 0;
        }

        System.out.println("A조 입니다.");
        for(i = 1; ;) {
            randNum = (int)(Math.random() * 9) + 1;

            if(checkDup[randNum - 1] != 0)
                continue;

            cnt++;

            checkDup[randNum - 1] = 1;
            System.out.printf("%d 번 = %d\n", i++, randNum);

            if(cnt == 9) {
                break;
            }
        }

        System.out.println("B조 입니다.");
        for(;;) {
            randNum = (int)(Math.random() * 8) + 10;

            if(checkDup[randNum - 1] != 0) {
                System.out.println("중복발생2");
                continue;
            }

            cnt++;

            checkDup[randNum - 1] = 1;
            System.out.printf("%d 번 = %d\n", i++, randNum);

            if(cnt == 17) {
                break;
            }
        }
    }
}
