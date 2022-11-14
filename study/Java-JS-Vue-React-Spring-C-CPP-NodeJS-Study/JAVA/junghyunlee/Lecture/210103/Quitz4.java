public class Quitz4 {
    public static void main(String[] args) {
        final int num = 31;
        int sum = 0, i = 1, res = 0, j = 0, k = 0;

        // Q: 도대체 언제 0 을 설정해야 하는가요?
        // A: 컴퓨터 초기값으로 0을 설정하지 않는다.
        //    기본적으로 컴퓨터는 초기 변수를 0으로 실행하지 않기 때문에
        //    0으로 초기화하지 않은 값은 알 수 없는 이상한 값을 가지고 있다.
        //    값을 누산하는 변수가 된다면
        //    잘못된 연산을 수행하지 않도록 0으로 초기화 해야 한다.

        for(i = 1; i < num; i++){
            if(i % 2 == 0 || i % 3 == 0) {
                sum += i;
                System.out.println("더하는 값 = " + i);
            }

            if(i % 5 == 0){
               sum -= i;
                System.out.println("빼는 값 = " + i);
            }
        }
        System.out.println("2의 배수 + 3의 배수 - 5의 배수 = " + sum);
    }
}
