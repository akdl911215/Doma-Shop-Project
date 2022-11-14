package Ninth;

public class EightHomework4 {
    public static void main(String[] args) {
        // 4) 주사위 게임을 한다.
        //    5명의 플레이어가 있다.
        //    이들은 모두 3개의 주사위를 가지고 있다.
        //    3개의 주사위를 굴려서 합산 결과가 가장 큰 사람이 이긴다.
        //    (숫자 6은 0 으로 무효화 된다)
        //    프로그램으로 이를 만들어 보자 !
        DiceGame dg = new DiceGame(5, 3);

        dg.findMax();
        dg.printWinner();
    }
}