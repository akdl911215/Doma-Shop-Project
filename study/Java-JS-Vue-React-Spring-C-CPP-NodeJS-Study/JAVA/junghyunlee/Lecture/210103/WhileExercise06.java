public class WhileExercise06 {
    public static void main(String[] args) {
        // 1, 1, 3, 4, 5, 8, 12, 17, 25, 37, 54, 79, ....
        // 위 수열에서 20번째 숫자를 찾도록 프로그래밍 해보자!
        // 1  1  3
        // 1  3  4
        // 3  4  5
        // 4  5  8
        // 5  8  12
        // 8  12 17
        final int Target = 20;
        final int AlREADY = 3;

        int loop = 0;
        int first = 1, second = 1, third = 3, res = 0;
        while(loop < Target - AlREADY) {
            res = first + third;
            first = second;
            second = third;
            third = res;
            loop++;
        }
        System.out.println("res = " + res);
    }
}
