import java.util.Random;

public class Quiz6 {
    public static void main(String[] args) {
        //주사위를 10번 굴려서 홀수는 더하고 짝수는 뺀다.
        //10번 굴린 이후의 주사위 눈금을 구하도록 프로그래밍 해보자!
        //(주사위 눈금의 총합을 구하면 된다!)

//        for(int i = 0; i < 3; i++) {
//            Random rand = new Random();
//            int dice = rand.nextInt(6) + 1;
//
//            System.out.println("주사위1 값 = " + dice);
//            if(i % 2 == 0){
//                System.out.println("짝수입니다.");
//            } else {
//                System.out.println("홀수입니다.");
//            }
//        }

        int sum = 0;

        for(int i = 0; i < 10; i++) {
            int dice = (int)((Math.random() * 6) + 1);

            System.out.println("주사위2 값 = " + dice);
            if (dice % 2 == 0) {
                System.out.println("짝수입니다");
                sum += dice;
            } else {
                System.out.println("홀수입니다");
                sum -= dice;
            }

        }
        System.out.println("결과값은 = " + sum);

    }
}
