package Ninth;

import java.util.Scanner;

class RockPaperScissors {
    final String[] computer = {"가위", "바위", "보"};
    String player;
    int randNum, winner;

    Scanner scan = new Scanner(System.in);

    public void playerChoice() {
        System.out.print("가위, 바위, 보 중 어떤 것을 내시겠습니까 ? ");
        player = scan.next();
    }

    public void computerChoice() {
        randNum = (int) (Math.random() * 3);
    }

    public void matchResult() {
        winner = 0; // 0: 초기값, 1 : 무승부, 2 : 사용자 승, 3 : 컴퓨터 승

        if (player.equals(computer[randNum])) {
            winner = 1;
        } else {
            switch (player) {
                case "가위":
                    if (randNum == 1) winner = 3; // 컴퓨터 : 바위
                    else winner = 2; // 컴퓨터 : 보
                    break;
                case "바위":
                    if (randNum == 0) winner = 2; // 컴퓨터 : 가위
                    else winner = 3; // 컴퓨터 : 보
                    break;
                case "보":
                    if (randNum == 0) winner = 3; // 컴퓨터 : 가위
                    else winner = 2; // 컴퓨터 : 바위
            }
        }
    }

    public void printResult() {
        if (winner == 0) {
            System.out.println("잘못 입력하셨습니다.");
        } else {
            System.out.printf("사용자 : %s VS 컴퓨터 : %s\n", player, computer[randNum]);
            switch (winner) {
                case 1:
                    System.out.println("무승부");
                    break;
                case 2:
                    System.out.println("사용자 승 !");
                    break;
                case 3:
                    System.out.println("컴퓨터 승 !");
                    break;
            }
        }
    }
}
