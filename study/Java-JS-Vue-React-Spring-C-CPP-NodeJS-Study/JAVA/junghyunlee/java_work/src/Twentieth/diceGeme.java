package Twentieth;

// 주사위 2개를 굴려서 컴퓨터와 대전을 치뤄보자!
// 눈금이 높은 사람이 이긴다!

// 주사위 1 ~ 6 까지의 눈금이 있는 2개를 준비한다.
// 눈금을 비교하고 승자를 뽑는다.
// 무승부면 다시 돌린다.

public class diceGeme {
    int dicePlayer;
    int diceComPlayer;
    int numSix = 6;
    int numOne = 1;


    public void printDicegame() {

        for (; ; ) {

            for(int i = 0; i < 2; i++) {
                dicePlayer += (int) (Math.random() * numSix) + numOne;
                diceComPlayer += (int) (Math.random() * numSix) + numOne;
            }
            System.out.println("게임 플레이어의 주사위 값 = " + dicePlayer);
            System.out.println("컴퓨터 플레이어의 주사위 값 = " + diceComPlayer);

            if (dicePlayer == diceComPlayer) {
                System.out.println("무승부입니다. 다시 던지세요");
            } else if (dicePlayer > diceComPlayer) {
                System.out.println("게임 플레이가 승리하셨습니다.");
                break;
            } else {
                System.out.println("컴퓨터 플레이어가 승리하셨습니다.");
                break;
            }
        }

    }
}
