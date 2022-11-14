import java.util.Scanner;

public class IfTest01 {
    // psvm
    public static void main(String[] args) {
        // sout
        System.out.print("숫자를 입력하세요 : ");

        String str1 = "짝수";
        String str2 = "홀수";

        Scanner scan = new Scanner(System.in);

        // 키보드 입력으로 받은숫자를 num 변수에 대입입
        int num = scan.nextInt();

        // 문자열과 숫자가 + 되면
        // 자동으로 숫자는 문자열이 되어서 처리된다.
        System.out.println("당신이 입력한 숫자는 " + num +"입니다.");
        System.out.println("당신이 입력한 숫자는 " + num + " " + num + "입니다.");
        // 실제로 숫자를 처리하고자한다면
        // 연산의 순서를 아래와 같이 변경하여 작업하면 된다.
        System.out.println("당신이 입력한 숫자는 " + (num + num) + "입니다.");
        //System.out.printf("당신이 입력한 숫자는 %d입니다.\n", num);

        // 3항 연산자를 작성하는 방법
        // 먼저 3항 연산자는 아래와 같은 형식으로 구성된다.
        // 조건 ? 참인경우 : 거짓인경우

        // 아래 케이스의 경우엔 조건에 따라 결과값이 바뀌는데
        // 이 값을 res라는 변수에 대입한 것이다.
        String res = num % 2 ==0 ? str1 : str2;

        System.out.println(num + "은 " + res + "입니다!");
    }
}
