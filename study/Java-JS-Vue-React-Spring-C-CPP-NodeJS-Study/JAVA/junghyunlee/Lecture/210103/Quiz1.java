public class Quiz1 {
    public static void main(String[] args) {
        // 1 ~ 10 까지의 숫자중 7을 만나면 종료하도록 출력해보자!
        final int num = 10;
        int i = 1;

        while(i <= num) {
            System.out.println("출력 ! " + i++);
            if(i == 7){
                System.out.println("10까지 가고 싶겠지만 7이 나와서 끝났어용^^");
                break;
            }
        }
    }
}
