package Twentieth;

public class PerfomancTest {
    public static void main(String[] args) {
        double sum = 0;

        // performanceCheckStart 시작간 할당
        PerformanceUtil.performanceCheckStart();

        // 10억번 반복
        for(int i = 1; i <= 2; i++) {
            // 이 공식이 잘 이해가 안됩니다
            // i x (거듭제곱 x i) x 삼각함수(i x 파이 / 180)
            sum += (i * (Math.pow(10, -15) * i)) * Math.sin(i * Math.PI / 180.0);
        }

        // performanceCheckEnd 끝나는 시 할당
        PerformanceUtil.performanceCheckEnd();

        System.out.println("sum = " + sum);

        // PerformanceUtil = 걸리는 시간 할당
        PerformanceUtil.printPerformance();
    }
}

