package Twentieth;

//import Twentieth.FinalPerformanceTest;

public class AccelThread extends OperationAccelerator implements Runnable {
    private int localStart;
    private int localEnd;
    private int threadId;

    private double localSum = 0;

    private static double totalSum = 0;

    public AccelThread(int start, int end, int maxThreadNum, int id) {
        super(start, end, maxThreadNum);

        int total = end - start + 1;
        // 스레드에 정확히 나눠서 배분하기 위해서.
        // 예를들면 10000개의 데이터가 있다고 가정하자.
        // 그러면 스레드가 10개라면 1000개씩 검사할 것이다.
        // 그런데 만약에 10001개라면? 10개라면 1000개씩
        // 하고 나머지 한개를 누가 가져갈것인가????
        // 그러면 데이터가 삭제가 되거나 무시가 되면 데이터
        // 무결성원칙이 깨지기 때문에 아닐것 같으니
        // 랜덤으로 1개가 분배될 듯 하다.
        int threadPerData = total / maxThreadNum;

        localStart = id * threadPerData + 1;
        localEnd = localStart + threadPerData - 1;
        threadId = id;
    }

    public synchronized void addAll(double localSum) {
        totalSum += localSum;
    }

    @Override
    public void run() {
        System.out.printf("threadId = %d, localStart = %d\n", threadId, localStart);
        System.out.printf("threadId = %d, localEnd = %d\n", threadId, localEnd);

        for(int i = localStart; i <= localEnd; i++) {
            //localSum += (i * (FinalPerformanceTest.COEFFICIENT * i)) * Math.sin(i * Math.PI / FinalPerformanceTest.DEG2RAD);
        }

        System.out.printf("threadId = %d, localSum = %f\n", threadId, localSum);

        addAll(localSum);

        System.out.printf("threadId = %d, totalSum = %f\n", threadId, totalSum);
    }
}