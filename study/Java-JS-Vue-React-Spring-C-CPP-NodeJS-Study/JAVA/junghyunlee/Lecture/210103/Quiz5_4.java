public class Quiz5_4 {
    public static void main(String[] args) {
        //특정 조건에서 반복이 멈추도록 만들어보자!

        for(;;) {
            int dice = (int)((Math.random() * 6) + 1);

            System.out.println("주사위 눈금 = " + dice);
            if (dice % 2 == 0) {
                System.out.println("짝수입니다");
                break;
            } else {
                System.out.println("홀수입니다");
            }

        }
    }
}
