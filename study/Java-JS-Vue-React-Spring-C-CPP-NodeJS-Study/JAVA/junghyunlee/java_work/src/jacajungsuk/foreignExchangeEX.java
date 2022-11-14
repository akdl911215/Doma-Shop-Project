package jacajungsuk;

import java.util.Scanner;

public class foreignExchangeEX {
    public static void main(String[] args) {

        float dollor;
        int won;

        System.out.print("환전하고 싶은 원화를 입력하시오 : ");
        Scanner scan = new Scanner(System.in);
        won = scan.nextInt();

        dollor = (float)won / 1100;
        System.out.printf("%d원 환전 액수 = %f", won, dollor);
    }
}
