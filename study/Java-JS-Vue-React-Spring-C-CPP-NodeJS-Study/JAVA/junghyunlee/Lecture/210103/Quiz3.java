public class Quiz3 {
    public static void main(String[] args) {
        //for를 사용해서 2의 배수만 출력하도록 프로그래밍 해보자!
        final int num = 11;

        for(int i = 1; i < num; i++) {
            if (i % 2 == 0) {
                System.out.println("i의 2의 배수 = " + i);

            }
        }

        for(int j = 2; j < num; j+=2) {
            System.out.println("j의 2의 배수 = " + j);
        }

    }
}
