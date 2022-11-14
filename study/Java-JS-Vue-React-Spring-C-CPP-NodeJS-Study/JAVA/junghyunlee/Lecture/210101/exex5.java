import java.util.Scanner;

public class exex5 {
    public static void main(String[] args) {
        System.out.print("숫자를 넣어보면 놀랄껄? : ");
        Scanner scan = new Scanner(System.in);

        int num = scan.nextInt();
        System.out.println("입력한 숫자는 " + num + " 입니다.");

        //2진수판별
        //2진수는 컴퓨터 비트 체계
        // 2 4 8 16 32 64 128 .... 등등
        // 0000 0001 , 0000 00010 , 0000 0100 , 0000 1000
        // 2^n승
        // 2진수는 2로 나눠서 나머지 0
        // 2진수는 4로 나눠서나머지 0
        // && 로하면 2가 적용이 안된다.
        // 3 5 9 17

        // 0000 1111 = 15
        // 0001 0000 = 16

        int num1 = num - 1;
        if((num & num1) == 0) {
            System.out.println("2의 n승입니다.");
        } else {
            System.out.println("2의 n승이 아닙니다.");
        }

    }
}
