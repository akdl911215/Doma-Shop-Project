import java.util.Scanner;

public class Exercise6 {
    public static void main(String[] args) {
        // 1471~1529 전체가 정지 구간
        // 999이하 정지, 2001 이상도 정지
        Scanner scan = new Scanner(System.in);

        System.out.print("제어 pwm을 입력하세요 : ");
        int pwm = scan.nextInt();

        System.out.println("당신이 입력한 pwm 값 : " + pwm);

        if(pwm > 2000) {    // pwm이 2000 보다 크다면
            System.out.println("잘못된 값 입력!");
        } else if(pwm >= 1530) { // pwm이 1529보다 크다면 && pwm이 2000보다 작거나 같다면
            System.out.println("전진");
        } else if(pwm > 1470) { // pwm이 1479보다 크다면 && pwm이 1530보다 작다면
            System.out.println("정지");
        } else if(pwm > 999) { // pwm이 999보다 크다면 && pwm이 1470보다 작거나 같다면
            System.out.println("후진");
        } else {               // pwm이 999보다 거자거나 같다면
            System.out.println("잘못된 값 입력!");
        }
    }
}
