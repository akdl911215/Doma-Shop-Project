public class BreakTest {
    public static void main(String[] args) {
        final int Max = 10;
        int i = 1;

        while(i < Max) {
            System.out.println("i = " + i++);

            if(i == 5){
                System.out.println("걸렷다 요놈!");
                // 반복 내에서 break 하는 순간 반복 자체를 종료함
                break;
            }
        }

        System.out.println("이건 언제나 어디서나 동작하는 녀썩!");
    }
}
