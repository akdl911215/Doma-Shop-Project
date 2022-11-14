public class ContinueTest {
    public static void main(String[] args) {
        final int Max = 10;
        int i = 1;

        while(i < Max) {
            i++;

            // Q : 4가 왜 빠지나요?
            // A : continue 하는 시점이 5
            //     continue를 하면 다시 루프로 올라간다.
            //     다시 올라가서 ++을 하므로 6

            if(i == 5){
                System.out.println("걸렷다 요놈!");
                // continue를 수행하면
                // 현재 진행하던 작업을 멈추고 다시
                // 루프(반복)의 최상위로 이동한다.
                continue;
            }

            System.out.println("i = " + ( i - 1 ));


        }

        System.out.println("이건 언제나 어디서나 동작하는 녀썩!");
    }
}
