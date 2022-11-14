import java.util.Scanner;

public class exex4 {
    public static void main(String[] args) {
        System.out.print("숫자를 입력해보실텨? : ");
        Scanner scan = new Scanner(System.in);

        int num = scan.nextInt();
        System.out.printf("입력한 숫자는 %d이군요\n", num);

        // 5로 나눠서 1이 될려면?
        // 11 / 2 = 나머지1 , 11 / 3 = 나머지 9
        // 22 / 2 = 나머지0, 22 / 3 =
        // 21 / 2 = 1

        // num % 5 != 0 && num % 2 == 1

        // 5로 나눠서 1이 될려면? 5로 나누고 + 1
        if (num % 5 != 0 && num % 2 == 1) {
            System.out.println("5로 나눈 나머지가 1입니다.");
        } else {
            System.out.println("5로 나눈 나머지가 1이 아닙니다.");
        }
    }
}
