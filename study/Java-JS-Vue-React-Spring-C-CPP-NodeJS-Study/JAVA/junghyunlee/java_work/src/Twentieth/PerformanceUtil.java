package Twentieth;

public class PerformanceUtil {
    // 시작시간
    public static long startTime;
    // 처리가 끝날때 까지 시간
    public static long estimatedTime;

    public static void performanceCheckStart() {
        // System.courrentTimeMillis() 는 현재시간을 구한다.
        // startTime 에 코드가 시작되고 난 현재 시간을 할당한다.
        startTime = System.currentTimeMillis();
    }

    public static void performanceCheckEnd() {
        // estimatedTime 에 코드가 끝난 현재 시간에 - 시작시간 의 계산값을 할당
        estimatedTime = System.currentTimeMillis() - startTime;
    }

    // 값을 가져오는 단위가 ms(1 / 1000 초)
    public static void printPerformance() {
        System.out.println(
                "걸린 시간: " + estimatedTime / 1000.0 + " s");
    }
}