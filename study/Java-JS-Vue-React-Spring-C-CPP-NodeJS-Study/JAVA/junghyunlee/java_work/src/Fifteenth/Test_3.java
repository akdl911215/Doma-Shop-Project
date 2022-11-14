package Fifteenth;

import java.util.Scanner;

public class Test_3 {
    public static void main(String[] args) {
        // 가위바위보를 짜보자
        // 1. 가위 2. 바위 3. 보

        int computerGammer;

        // 값을 입력한다
        System.out.print("가위 바위 보 게임을 시작합니다.\n");
        System.out.print("가위 바위 보 를 선택하세요 : ");
        Scanner scan = new Scanner(System.in);
        int Gammer = scan.nextInt();

        computerGammer = (int)(Math.random() * 3) + 1;
        System.out.println("computerGammer의 선택 = " + computerGammer);

        // 가위는 보에게 승리합니다.
        // 바위는 가위에게 승리합니다.
        // 보는 바위에게 승리합니다.
        if(Gammer <= 0){
            System.out.println("Gammer가 잘못된 선택을 하셨습니다. 다시 선택하세요");
        } else if((Gammer == 1 && computerGammer == 1) ||
                (Gammer == 2 && computerGammer == 2)
                || (Gammer == 3 && computerGammer == 3)) {
            System.out.println("무승부 입니다.");
        } else if((Gammer == 1 && computerGammer == 3) ||
                (Gammer == 2 && computerGammer == 1)
                || (Gammer == 3 && computerGammer == 2)) {
            System.out.println("Gammer가 승리하셨습니다.");
        } else {
            System.out.println("computerGammer의 승리입니다");
        }
    }



}
