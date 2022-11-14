import java.util.Scanner;

public class SwitchCaseStatement {
    public static void main(String[] args) {
        System.out.println("switch 문을 배워봅시다잉 ~~");

        Scanner scan = new Scanner(System.in);

        System.out.print("점수를 입력합세YO : ");
        int num = scan.nextInt();

        if((num > 100) || (num < 0)) {
            System.out.println("잘못된 값을 입력하였습니다.");
        }

        // (int)(num / 10.0f)
        // 위의 코드는 결과를 강제로 int 형으로 처리하는 방식이다.
        // 10.0f 라는 것이 보이는데
        // 실수형에 f가 오면 foat 타입을 의미한다.
        // 결국 f 를 쓰지 않으면 double 타입을 의미한다.
        // 위의 방식을 강제 캐스팅이라고도 하며 Type Casting이라 부른다.
        int fnum = (int)(num / 10.0f);
        System.out.println("실수형을 정수형으로 만든 값 = " + fnum);
        // 90 ~ 100 : A , 80 ~ 89 : B , 78 ~79 : C , 60 ~ 69 : D , 나머지 F
        // 90 ~ 100 / 10 = 9.0 ~ 10.0
        // 80 ~ 89 / 10 = 8.0 ~ 8.9
        // 70 ~ 79 / 10 = 7.0 ~ 7.9
        // 60 ~ 69 / 10 = 6.0 ~ 6.9
        // 0 ~ 59 / 10 = 0.0 ~ 5.9

        // break 가 case 마다있는 것을 볼 수 있다.
        // break가 없는 경우
        // 아래와 같이 10과 9일 경우엔
        // 10 혹으 9에 대해 모두 같은 처리를 하겠음을 의미한다.
        // break를 만나기전까지는 동작이 유지된다.
        switch (fnum) {
            case 10:
            case 9:
                System.out.println("당신의 학점은 A");
                break;
            case 8:
                System.out.println("당신의 학점은 B");
                break;
            case 7:
                System.out.println("당신의 학점은 C");
                break;
            case 6:
                System.out.println("당신의 학점은 D");
                break;
            default:
                System.out.println("총 맞았습니다 F 빵야 빵야");
                break;
        }
    }
}
