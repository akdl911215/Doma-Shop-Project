package univer.ch04ver2.enumTest;

enum BaseballTeam {
    LG(40, 30),
    SS(30, 40),
    KT(20, 50),
    SK(35, 35),
    HW(27, 43),
    NC(55, 15);

    private final int win;
    private final int lose;
    BaseballTeam(int win, int lose) {
        this.win = win;
        this.lose = lose;
    }

    public int win() {
        return win;
    }

    public int lose() {
        return lose;
    }

    public double winsRate() {
        return (win * 100.0) / (win + lose);
    }
}

public class EnumTest2 {
    public static void main(String[] args) {
        BaseballTeam bt = BaseballTeam.LG;
        System.out.println(bt.win());
        System.out.println(bt.lose());
        System.out.println(bt.winsRate());
    }
}
