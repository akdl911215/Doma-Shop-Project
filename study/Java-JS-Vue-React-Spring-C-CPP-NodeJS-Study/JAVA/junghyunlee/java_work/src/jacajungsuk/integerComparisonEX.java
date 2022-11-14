package jacajungsuk;

// 1. 10 ~ 99 사이의 정수를 입력받는다
// 2. 십의 자리와 1의 자리가 같은지 판별해라
// 3. 두개가 같은 숫자라면 출력하라

import java.util.Scanner;

public class integerComparisonEX {
    public static void main(String[] args) {

        int num ;

        System.out.print("10 ~ 99 사이의 정수를 입력하시오 : ");
        Scanner scan = new Scanner(System.in);
        num = scan.nextInt();

        if(num > 99 || num < 10) {
            System.out.println("잘못된 입력입니다.");
        } else if(num % 11 == 0) {
            System.out.println("Wow! 10의 자리와 1의 자리가 같습니다 = " + num);
        } else {
            System.out.println("10의 자리와 1의 자리가 다릅니다 = " + num);
        }
    }
}
