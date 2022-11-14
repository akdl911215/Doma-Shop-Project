import java.util.Scanner;

public class exex6 {
    public static void main(String[] args) {
        System.out.print("숫자를 입력하시오 : ");
        Scanner scan = new Scanner(System.in);

        int num = scan.nextInt();
        System.out.print("자동차가 ");

        if(num > 2000){
            System.out.println("오류입니다. 재입력하세요");
        } else if(num >= 1530){
            System.out.println("전진합니다.");
        } else if(num >= 1471){
            System.out.println("정지합니다.");
        } else if(num >= 1000){
            System.out.println("후진합니다.");
        } else {
            System.out.println("오류입니다. 재입력하세요");
        }

    }
}
