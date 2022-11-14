import java.util.Random;

public class WhileExercise04 {
    public static void main(String[] args) {
        // A의 주사위와 B의 주사위를 만들고
        // 주사위를 각자 굴려서
        // 더 높은 숫자가 나온 사람이 이기게 만들어보자.
        Random rand = new Random();

        int randNum1 = rand.nextInt(6) + 1;
        int randNum2 = rand.nextInt(6) + 1;
        System.out.println("1팀 주사위 값 = " + randNum1 +" vs 2팀 주사위 값 = " + randNum2);

        if(randNum1 > randNum2) {
            System.out.println("1팀이 이겼습니다");
        } else if(randNum1 < randNum2) {
            System.out.println("2팀이 이겼습니다");
        } else {
            System.out.println("두 팀 모두 다시 던지세요");
        }
    }
}
