package FirstTest;

import java.util.Scanner;

public class RockSicssorPaper {
    // 1.가위 2.바위 3.보
    // 1) 내가 가위바위보를 입력해야한다.
    // 2) 내가 선택하면 컴퓨터가 랜덤한 값을 1 ~ 3 출력하게 한다.
    // 3) 2개의 값을 비교한다.
    // 4) 무승부, 승리, 패배를 판별한다.

    private int numOne = 1;
    private int numTwo = 2;
    private int numThree = 3;
    private int gammerChioce;
    private int computerChoice;
    Scanner scan;

    public RockSicssorPaper(){
        this.gammerChioce = gammerChioce;
        this.computerChoice = computerChoice;
    }

    public int gammerChioce(){
        scan = new Scanner(System.in);
        System.out.print("1.가위 2.바위 3.보 중에서 하나를 선택하세요 : ");
        gammerChioce =  scan.nextInt();
        System.out.println("Gammer의 입력 =  " + gammerChioce);

        return gammerChioce;
    }

    public void computerChoice(){
        computerChoice = (int)(Math.random() * numThree) + numOne;
        System.out.print("컴퓨터의 선택 = " + computerChoice);
        System.out.println("");
    }

    // 승리 법칙
    // 1 > 3
    // 2 > 1
    // 3 > 2
    public void compare(){
        if((gammerChioce <= 0) || (gammerChioce > 3)){
            System.out.println("으잉? 그걸 왜눌렀지? 다시 입력하세요.");
        } else if( ((gammerChioce == 1) && (computerChoice == 1))
                || ((gammerChioce == 2) && (computerChoice == 2))
                || ((gammerChioce == 3) && (computerChoice == 3)) ) {
            System.out.println("무승부 입니다.");
        } else if ( ((gammerChioce == 1) &&(computerChoice == 3))
                || ((gammerChioce == 2) && (computerChoice == 1))
                || ((gammerChioce == 3) && (computerChoice == 2)) ) {
            System.out.println("[축] 게이머의 승리입니다. [축]");
        } else {
            System.out.println("컴퓨터의 승리입니다.");
        }
    }

}
