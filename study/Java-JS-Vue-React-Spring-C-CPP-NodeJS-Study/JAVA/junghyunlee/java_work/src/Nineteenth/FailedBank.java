package Nineteenth;

public class FailedBank {
    // 10만을 할당
    private int money = 100000;

    public int getMoney() {
        return money;
    }

    public void setMoney(int money) {
        this.money = money;
    }

    // plus 값을 입력
    public void plusMoney(int plus) {
        // private int money = 100000; 을 m 에 할당
        int m = getMoney();

        try {
            // 슬립은 왜쓰는 건가요??????
            // millis를 위아래 두개를 10,10 / 100,10 일때는
            // 80, 50 일때와 값은 똑같고 0 , 0 으로 하면
            // 값이 플러스 388000, 마이너스 296000이 됩니다.
            // 아마 싱크로나이즈처럼 순서를 정해주기 위한 방식 같은데
            // 그렇다면 0,0일 경우에도 값이 이상해져야하는데 의문입니다...
            Thread.sleep(80);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // 할당 받은 m에다가 plub 값을 더해서
        // setMoney 로 리턴한다
        setMoney(m + plus);
    }

    // plus 값을 입력
    public void minusMoney(int minus) {
        int m = getMoney();

        try {
            Thread.sleep(50);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }

        // 할당 받은 m에다가 plub 값을 빼서
        // setMoney 로 리턴한다
        setMoney(m - minus);
    }
}