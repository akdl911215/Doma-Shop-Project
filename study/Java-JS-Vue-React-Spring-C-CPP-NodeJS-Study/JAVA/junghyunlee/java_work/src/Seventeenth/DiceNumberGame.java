package Seventeenth;

// 1. 내꺼 랜덤 다이스를 준비한다.
// 2. 컴퓨터 랜덤 다이스를 준비한다.
// 3. 두개의 값을 비교한다.
// 4. 무승부일때는 다시 돌리고 그외에는 승패가 갈리게하자
public class DiceNumberGame {

    private int gammerDiceNum;
    private int computerDiceNum;
    private int numOne = 1;
    private int numSix = 6;

    public DiceNumberGame() {
        this.gammerDiceNum = gammerDiceNum;
        this.computerDiceNum = computerDiceNum;
    }

    public void diceNumComparison() {
        boolean disNup = false;

        for (; ; ) {
            gammerDiceNum = (int)(Math.random() * numSix) + numOne;
            System.out.printf("게이머 주사위 값 = %d\n", gammerDiceNum);

            computerDiceNum = (int)(Math.random() * numSix) + numOne;
            System.out.printf("컴퓨터 주사위 값 = %d\n", computerDiceNum);

            if (gammerDiceNum == computerDiceNum) {
                System.out.println("무승부입니다. 다시 던지세요");
            } else if (gammerDiceNum > computerDiceNum) {
                System.out.println("게이머가 승리하셨습니다.");
                break;
            } else {
                System.out.println("컴퓨터가 승리하셨습니다.");
                break;
            }
        }
    }

}
