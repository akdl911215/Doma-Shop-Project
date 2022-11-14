package FirstTest;

import java.util.Random;
import java.util.Scanner;

public class TestGugudan {

    int x;
    int y;
    int z;
    int answer;

    Scanner scan = new Scanner(System.in);
    Random rand = new Random();

    TestGugudan(){
        System.out.println("구구단 게임을 시작합니다");
        makeMul();
    }

    void makeMul(){
        x = rand.nextInt(9) + 1;
        y = rand.nextInt(9) + 1;
        answer = x*y;
        System.out.print(x + " X " + y + " = 정답을 쓰시오 : ");
        z = scan.nextInt();
        if(z == answer) {
            System.out.println("정답입니다.");
        } else {
            System.out.println("오답입니다.");
        }
    }

    public static void main(String[] args) {
        TestGugudan tg = new TestGugudan();
    }
}
