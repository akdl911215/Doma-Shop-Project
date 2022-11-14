package Nineteenth;

// 결과값을 보면 3000씩 계속올라가다가 어느순간에 1000씩
// 계속 줄어듭니다 그리고 올라갓다 내려갔다를 계속 반복합니다.
// 그럼 제가 혼자서 가정을 해봤을때 총 200만번(c와 d 반복)을 결과를
// ᄎᆕᆯ력할때 일정 비율(갯수)마다 출력이 된다고 생각됩니다.
// 제 가정이 맞았을 경우 3가지가 궁금합니다.
// 1) 싱크로나이즈는 단순히 레이스컨디션을 일으키지 않게 도와주는
//    것이며 우선순위는 같을 경우에 랜덤으로 실행이 되는게 맞나요?
// 2) 일정 비율(갯수) 또한 랜덤인가요?
// 3) 싱크로나이즈는 우선순위가 같을때라도 무조건 먼저 실행하게
//    만드는 방법은 없나요?
class C extends Thread {
    public void run() {
        for(int i = 0; i < 1000000; i++) {
            SynchronizedBankTest.sb.plusMoney(3000);
        }

        //SynchronizedBankTest.sb.plusMoney(3000);

        System.out.println("plusMoney(3000): " +
                SynchronizedBankTest.sb.getMoney());
    }
}

class D extends Thread {
    public void run() {
        for(int i = 0; i < 1000000; i++) {
            SynchronizedBankTest.sb.minusMoney(1000);
        }

        //SynchronizedBankTest.sb.minusMoney(1000);

        System.out.println("minusMoney(1000): " +
                SynchronizedBankTest.sb.getMoney());
    }
}

public class SynchronizedBankTest {
    public static SynchronizedBank sb = new SynchronizedBank();

    // 예외는 InterruptedException 로 던져버린다.
    public static void main(String[] args) throws InterruptedException {
        System.out.println("원금: " + sb.getMoney());

        C c = new C();
        D d = new D();

        c.start();
        d.start();
    }
}