package Nineteenth;

class X extends Thread {
    public void run() {
        for(int i = 0; i < 1000000; i++) {
            // 현재 케이스는 실제 Critical Section에만 강제 동기화를 걸었다.
            // 그러므로 여러 태스크들이 동시에 접근할 수 있는 영역을
            // 부분적으로 안전하게 보호한 반면
            // 이전의 예제는 매서드 전체를 보호했다.
            // 그러므로 당연히 Critical Section만 방어할때에 비해 성능이 저하된다.

            // PerfSyncBankTest 를 동기화 한다.
            synchronized (PerfSyncBankTest.psb) {
                // 동기화한 PerfSyncBankTest 의 plusMoney 3000을 할당.
                PerfSyncBankTest.psb.plusMoney(3000);
            }
        }

        // println은 왜 2개일까???
        // 실제 출력은 밑에 출력이 결과로 출력된다.
        // 하지만 위의 출력이 주석처리시 값이 변화된다.
        // 가정해보자면, 동기화로 인해 위의 출력을 선언해야지 값을
        // 불러올 수 있게되고, 그 후에 밑에 출력으로 출력한 것이라고 생각이든다.
        System.out.println(PerfSyncBankTest.psb.getPlusMsg());

        System.out.println("plusMoney(): " +
                PerfSyncBankTest.psb.getMoney());
    }
}

class Y extends Thread {
    public void run() {
        for(int i = 0; i < 1000000; i++) {
            synchronized (PerfSyncBankTest.psb) {
                PerfSyncBankTest.psb.minusMoney(1000);
            }
        }

        System.out.println(PerfSyncBankTest.psb.getMinusMsg());

        System.out.println("minusMoney(): " +
                PerfSyncBankTest.psb.getMoney());
    }
}

public class PerfSyncBankTest {
    public static PerfSyncBank psb = new PerfSyncBank();

    public static void main(String[] args) throws InterruptedException {
        System.out.println("원금: " + psb.getMoney());

        X x = new X();
        Y y = new Y();

        x.start();
        y.start();
    }
}