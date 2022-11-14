import java.util.Scanner;

public class Exercise5 {
    public static void main(String[] args) {
        System.out.println("2의 n승을 판정해보자");

        Scanner scan = new Scanner(System.in);
        System.out.print("아무런 숫자나 입력해보세요 : ");

        int num = scan.nextInt();
        System.out.println("입력값은 = " + num);

        if(num == 0){
            System.out.println("0입니다.");
        }

        // Q: 조건식에 괄호가 없으면 왜 오류이가?
        // A: 아래 코드를 보면 빨간줄이 나오는데
        //    빨간줄에 커서를 가다 대면 required type: boolean
        //    provided type: int 라는 차이 보일 것이다.

        //int res = num & (num - 1);
        if( ( num & (num - 1) ) == 0) {
            System.out.println("입력 숫자 " + num + "은 2의 n승입니다.");
        } else {
            System.out.println("입력 숫자 " + num + "은 2의 n승이 아닙니다.");
        }
    }
}
