import java.util.Random;

public class Quiz5 {
    public static void main(String[] args) {
        // 주사위 게임을 해보자!!
        // 이 주사위 게임의 규칙은 다음과 가탇.
        // 홀수가 나오면 주사위를 계속해서 굴릴 수 있고
        // 마지막에 짝수가 나오면 주사위를 멈춘다.
        // 이때 마지막 주사위 눈금을 구하도록 프로그래밍 해보자!
        // (마지막 눈금은 모든 주사위 눈금의 합산값이다)

        // 주사위는 1 ~ 6까지

        Random rand = new Random();
        int dice = 0, sum = 0;

        System.out.println("주사위 눈금 = " + dice);

        if(dice % 3 == 0){
            System.out.println("홀수입니다");
        } else {
            System.out.println("짝수입니다");

            for (; ; ) {
                int randNum = rand.nextInt(6) + 1;
                System.out.println("주사위 의 값을 출력합니다 : " + randNum);

            }
        }
    }
}
