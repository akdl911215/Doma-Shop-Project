package Twentieth;

public class OperationAccelerator {
    final int ONE = 1;

    private int dataStart;
    private int dataEnd;
    private int numOfData;
    private int maxThreadNum;

    public OperationAccelerator(int start, int end, int maxThreadNum) {
        // 원하는 숫자의 시작 숫자
        dataStart = start;
        // 원하는 숫자의 끝 숫자
        dataEnd = end;

        // 예를 들어보자. end : 10, start 1, One 1
        // 그러면 결과는 10 - 1 + 1 = 10
        // end : 100, start 1, One 1
        // 결과는 100 - 1 + 1 = 100
        // end : 100, start 5, One 1
        // 결과는 100 - 5 + 1 = 96
        // 이 공식을 사용하는 이유를 모르겠다......
        numOfData = end - start + ONE;
        // ThreadNum 으로 몇개의 스레드를 사용할지 결정
        this.maxThreadNum = maxThreadNum;
    }
}