package Twentieth;

public class PerformanceTest2 {
    final static int ZERO = 0;
    final static int END = 1000000000;
    final static int START = 1;
    // 10의 -15승을 구한다.
    final static double COEFFICIENT = Math.pow(10, -15);
    // 3.1416 라디안으로 변환시킨다.
    final static double DEG2RAD = 180.0;

    public static void main(String[] args) {
        double sum = ZERO;

        // 코드를 시작한 현재시간을 할당
        PerformanceUtil.performanceCheckStart();

        for(int i = START; i <= END; i++) {
            sum += (i * (COEFFICIENT * i)) * Math.sin(i * Math.PI / DEG2RAD);
        }

        // 현재 코드의 끝난 시간 - 시작시간 의 계산값을 할당
        PerformanceUtil.performanceCheckEnd();

        System.out.println("sum = " + sum);

        // 총 걸린시간을 할당
       PerformanceUtil.printPerformance();
    }
}