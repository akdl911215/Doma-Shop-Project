import java.util.Scanner;

public class WhileExercise05 {
    public static void main(String[] args) {
        //피보나치 수열을 프로그래밍으로 구현해보자!
        //구체적으로 13번째 항의 숫자를구하도록 만들어보자!
        //1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987
        //첫째항 + 둘째항 = 셋째항
        //둘째항 + 셋째항 = 넷째항
        // .......
        //아홉번째항 + 열번째항 = 열한번째항
//        Scanner scan = new Scanner(System.in);
//
//        System.out.print("몇번째 항을 구할까요 ? : ");
//        int num = scan.nextInt();
//        System.out.println("입력한 항은 " + num + "번째항입니다.");

        final int Target = 13;
        final int ALREADY = 2;

        int loop = 0;
        int first = 1, second = 1, res = 0;


        while(loop < Target - ALREADY) {
            res = first + second;
            first = second;
            second = res;
            loop++;
        }
        System.out.println("res = " + res);
    }
}
