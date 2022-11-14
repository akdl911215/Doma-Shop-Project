import sun.security.rsa.RSAUtil;

import java.util.Scanner;

public class LogicalOperation {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);

        System.out.print("숫자를 입력하세요 : ");
        int num = scan.nextInt();

        // (num %2 == 0) : 2로 나눈 나머지가 0인가?
        // (num %3 == 0) : 3으로 나눈 나머지가 0인가?
        // && 논리 연산자 AND
        // 논리 연산자 AND는 두 개의 조건이 모두 참인 경우에만 참이다.
        // 즉 위의 두 가지 질문에 대한 답이 모두 참이어야만
        // 아래의 if 문이 동작하게 된다.
        if((num %2 == 0) && (num % 3 == 0)) {
            System.out.println(num + "은 6의 배수다!");
        } else {
            System.out.println(num + "은 6의 배수가 아니다!");
        }


        // || 논리 연산자 OR
        // 둘 중 하나라도 참이라면 참
        if((num %2 == 0) || (num % 3 == 0)) {
            System.out.println(num + "은 2 혹은 3의 배수다!");
        } else {
            System.out.println(num + "은 2 혹은 3의 배수가 아니다!");
        }

        // ! 논리 연산자 NOT
        // 결과 자체를 부정한다.
        if(!(num % 2 == 0)) {
            System.out.println(num + "은 2의 배수가 아니다!");
        } else {
            System.out.println(num + "은 2의 배수다!");
        }
    }
}
