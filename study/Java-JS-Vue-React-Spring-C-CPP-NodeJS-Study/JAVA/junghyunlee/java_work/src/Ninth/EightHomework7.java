package Ninth;
import java.util.Scanner;

class SpecialDiceGame {
    int gamer, maxIndex, winner;
    int[] player, diceNum1, diceNum2;

    Scanner scan = new Scanner(System.in);

    public void setDiceGame(int gamer) { // 플레이어 수 지정
        this.gamer = gamer;
        player = new int[gamer];
        diceNum1 = new int[gamer];
        diceNum2 = new int[gamer];

        for (int i = 0; i < gamer; i++) { // 점수 초기화
            player[i] = 0;
            diceNum2[i] = 0;
        }
    }

    public void playDiceGame() {
        for (int i = 0; i < gamer; i++) {
            diceNum1[i] = (int)(Math.random() * 8) + 1;

            player[i] += diceNum1[i]; // 주사위 굴린 결과 저장

            if (diceNum1[i] % 2 != 0) { // 홀수가 나오면 한 번 더 굴릴 수 있다.
                diceNum2[i] = (int) (Math.random() * 8) + 1;

                player[i] += diceNum2[i]; // 홀수만 아니라면 앞서 얻은 값에 두 번째 나온 값을 추가한다.

                switch (diceNum2[i]) {
                    case 2: // 2: 이미 주사위를 얻은 사람의 주사위 값을 3 파괴한다. (본인 제외. 본인 포함이면 j <= i)
                        for (int j = 0; j < i; j++) {
                            player[j] -= 3;
                        }

                        break;
                    case 4: // 4: 지정한 사용자의 주사위 값을 0 으로 만든다.
                        System.out.printf("Player %d 두 번째 결과 %d !\n" +
                                "점수를 초기화 시킬 Player 번호를 입력하세요. ", i + 1, diceNum2[i]);
                        int zero = scan.nextInt();

                        player[zero - 1] = 0;
                        System.out.printf("Player %d 점수 삭제\n\n", zero);

                        break;
                    case 6: // 6: 모든 플레이어의 주사위 값을 2 파괴한다.
                        for (int j = 0; j < gamer; j++) {
                            player[j] -= 2;
                        }

                        break;
                    case 8: // 8: 자신을 제외한 모든 플레이어의 주사위 값을 3 상승시킨다.
                        for (int j = 0; j < gamer; j++) {
                            if (j != i) {
                                player[j] += 3;
                            }
                        }

                        break;
                    default: // 연속해서 홀수가 나오면 0점 처리된다.
                        player[i] = 0;
                }
            }

            for (int j = 0; j < gamer; j++) { // 합산 결과는 최소 0 이상이다.
                if (player[j] < 0) { // 음수일 시 0으로 값 변경
                    player[j] = 0;
                }
            }
        }
    }

    public void resultDiceGame() {
        maxIndex = 0;

        for (int i = 1; i < gamer; i++) {
            if (player[maxIndex] <= player[i]) { // 배열의 가장 높은 값을 가진 인덱스 검색
                maxIndex = i; // 값 중복 시 마지막 인덱스 저장됨
            }
        }
    }

    public void printGameResult() {
        winner = 1; // 가장 높은 점수를 얻은 인원 수 (기본 1명)

        System.out.println("중간 결과"); // 규칙 3 적용 전
        for (int i = 0; i < gamer; i++) {
            System.out.printf("Player %d : %d (%d + %d)   ",
                    i + 1, diceNum1[i] + diceNum2[i], diceNum1[i], diceNum2[i]);
        }
        System.out.println();

        System.out.println("\n최종 결과");
        for (int i = 0; i < gamer; i++) {
            System.out.printf("Player %d : %d점\t", i + 1, player[i]);
        }
        System.out.println();

        // 무승부 확인
        for (int i = 0; i < maxIndex; i++) { // 배열 최대값을 가진 인덱스 중 마지막까지 반복
            if (player[i] == player[maxIndex]) { // 그 전까지 같은 값이 또 있는지 확인
                System.out.printf("Player %d - ", i + 1);
                winner++; // 있다면 인원 수 증가
            }
        }

        // 배열 최대값을 가진 마지막 인덱스 값 출력
        System.out.printf("Player %d ", maxIndex + 1);

        if (winner == 1) { // 가장 높은 점수를 얻은 인원이 1명이면 승리
            System.out.println("승리 !");
        } else { // 2명 이상이면 무승부
            System.out.println("무승부 !\n\n게임을 재시작 합니다.\n");
        }
    }
}

public class EightHomework7 {
    public static void main(String[] args) {
        // 6) 특수한 주사위 게임이다.
        //    플레이어의 수는 3명이라고 가정한다.
        //    주사위는 1개 있으며 이 주사위는 정팔면체이다.
        //    (면이 8개 있다는 뜻: 1 ~ 8)
        //    주사위를 굴려 가장 큰 숫자가 나온 사람이 이기는 게임이다.
        //    규칙 1) 홀수가 나오면 한 번 더 굴릴 수 있다.
        //           [단, 최초 한 번만 허용된다]
        //    규칙 2) 홀수가 나와 기회를 한 번 더 얻었을 때
        //           그 다음에도 연속해서 홀수가 나오면 0 점 처리된다.
        //    규칙 3) 홀수가 나와 기회를 한 번 더 얻었을 때
        //           아래의 숫자들은 각각 다른 능력을 가진다.
        //           2: 이미 주사위를 얻은 사람의 주사위 값을 3 파괴한다.
        //           4: 지정한 사용자의 주사위 값을 0 으로 만든다.
        //           6: 모든 플레이어의 주사위 값을 2 파괴한다.
        //           8: 자신을 제외한 모든 플레이어의 주사위 값을 3 상승시킨다.
        //           [ 홀수만 아니라면 앞서 얻은 값에 두 번째 나온 값을 추가한다 ]
        //    규칙 4) 합산 결과는 최소 0 이상이다.
        //    규칙 5) 무승부가 발생한다면 승부가 날 때까지 게임을 다시 시작한다.
        //
        //    ex) A: 7(5 + 2), B: 7(5 + 2), C: 9(1 + 8)
        //           7 - 3 = 4    7 + 3 = 10
        //           4 + 3 = 7
        SpecialDiceGame sdg = new SpecialDiceGame();

        while (true) {
            sdg.setDiceGame(3);
            sdg.playDiceGame();
            sdg.resultDiceGame();
            sdg.printGameResult();

            if (sdg.winner == 1) break; // 단독 승리 시 종료
        }
    }
}
