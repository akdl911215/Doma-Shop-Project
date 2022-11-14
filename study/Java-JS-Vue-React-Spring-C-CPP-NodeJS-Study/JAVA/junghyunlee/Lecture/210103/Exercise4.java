import java.util.Scanner;

public class Exercise4 {
    public static void main(String[] args) {
        System.out.println("5로 나눠서 1이 남는 숫자 찾기");

        Scanner scan = new Scanner(System.in);
        System.out.print("아무런 숫자나 입력해보세요 : ");


        int num = scan.nextInt();
        System.out.println("입력값은 = " + num);

        // num을 5로 나눠서 나머지가 1인가?
        if(num % 5 == 1) {
            System.out.println(num + "은(는) 5로 나눠서 1이 남는다.");
        } else {
            System.out.println(num + "은(는) 5로 나눠서 1이 남지 않는다.");
        }
    }
}