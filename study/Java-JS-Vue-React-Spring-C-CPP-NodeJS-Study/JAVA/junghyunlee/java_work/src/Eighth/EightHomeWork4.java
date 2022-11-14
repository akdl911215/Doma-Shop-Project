package Eighth;

import jdk.swing.interop.SwingInterOpUtils;

// 6 값 > 0 값 으로 변환해야함.
class DicePlayer {
    int num, res = 0, sixdice = 0;
    int totalRandomDice = 0, totalRandomDice2 = 0, totalSumDice = 0, sumTotalDice = 0;
    final int FixNum = 6;
    int[] scores = new int[FixNum];

    public void DiceGamePlayer(int num) {
        System.out.printf("플레이어는 %d명 입니다.\n\n", num);
    }

    public void DiceStart() {
        for (int i = 1; i <= 5; i++) { //

            int randomDice = (int) (Math.random() * 6) + 1;
            if (randomDice == 6) {
                randomDice = 0;
                System.out.printf("%d 번째 사람의 1 번째 주사위 결과값 = %d\n", i, randomDice);
            } else {
                System.out.printf("%d 번째 사람의 1 번째 주사위 결과값 = %d\n", i, randomDice);
            }

            int randomDice2 = (int) (Math.random() * 6) + 1;
            if (randomDice2 == 6) {
                randomDice2 = 0;
                System.out.printf("%d 번째 사람의 2 번째 주사위 결과값 = %d\n", i, randomDice2);
            } else {
                System.out.printf("%d 번째 사람의 2 번째 주사위 결과값 = %d\n", i, randomDice2);
            }

            int randomDice3 = (int) (Math.random() * 6) + 1;
            if (randomDice3 == 6) {
                randomDice3 = 0;
                System.out.printf("%d 번째 사람의 3 번째 주사위 결과값 = %d\n", i, randomDice3);
            } else {
                System.out.printf("%d 번째 사람의 3 번째 주사위 결과값 = %d\n", i, randomDice3);
            }

            scores[i]  = randomDice + randomDice2 + randomDice3;
            System.out.printf("%d 번째 사람의 주사위 총 값 = %d\n\n", i, scores[i]);
//            System.out.println("scores[1] = " + scores[1]);
//            System.out.println("scores[2] = " + scores[2]);
//            System.out.println("scores[3] = " + scores[3]);
//            System.out.println("scores[4] = " + scores[4]);
//            System.out.println("scores[5] = " + scores[5]);

            if(scores[1] > scores[2] && scores[1] > scores[3] && scores[1] > scores[4] && scores[1] > scores[5]){
                System.out.println("1 번째 참가자가 승리하셨습니다!");
            } else if(scores[2] > scores[1] && scores[2] > scores[3] && scores[2] > scores[4] && scores[2] > scores[5]){
                System.out.println("2 번째 참가자가 승리하셨습니다!");
            } else if(scores[3] > scores[2] && scores[3] > scores[1] && scores[3] > scores[4] && scores[3] > scores[5]){
                System.out.println("3 번째 참가자가 승리하셨습니다!");
            } else if(scores[4] > scores[2] && scores[4] > scores[3] && scores[4] > scores[1] && scores[4] > scores[5]){
                System.out.println("4 번째 참가자가 승리하셨습니다!");
            } else if(scores[5] > scores[1] && scores[5] > scores[3] && scores[5] > scores[4] && scores[5] > scores[2]){
                System.out.println("5 번째 참가자가 승리하셨습니다!");
            }
        }
    }
}





public class  EightHomeWork4 {
    public static void main(String[] args) {
        //  주사위 게임을 한다.
        //  5명의 플레이어가 있다.
        //  이들은 모두 3개의 주사위를 가지고 있다.
        //  3개의 주사위를 굴려서 합산 결과가 가장 큰 사람이 이긴다.
        //  (숫자 6은 0 으로 무효화 된다)
        //  프로그램으로 이를 만들어보자!
        DicePlayer dp = new DicePlayer();
        dp.DiceGamePlayer(5);
        dp.DiceStart();

    }
}
