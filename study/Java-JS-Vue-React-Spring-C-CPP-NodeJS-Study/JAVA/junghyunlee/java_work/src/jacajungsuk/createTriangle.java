package jacajungsuk;

// 1. 3개의 값을 입력받아라
// 2. 삼각형이 되려면 2변의 합이 1변의 합보다 커야한다.

import java.util.Scanner;

public class createTriangle {
    public static void main(String[] args) {

        int side1, side2, side3;

        System.out.print("삼각형의 1번 변을 입력하시오 : ");
        Scanner scan1 = new Scanner(System.in);
        side1 = scan1.nextInt();

        System.out.print("삼각형의 2번 변을 입력하시오 : ");
        //Scanner scan2 = new Scanner(System.in);
        side2 = scan1.nextInt();

        System.out.print("삼각형의 3번 변을 입력하시오 : ");
        //Scanner scan3 = new Scanner(System.in);
        side3 = scan1.nextInt();

        if((side1 > side2 + side3) || (side2 > side1 + side3) || (side3 > side2 + side1)) {
            System.out.println("삼각형을 만들 수 없습니다.");
        } else {
            System.out.println("삼각형을 만들 수 있습니다. 당장 시작하세요!");
        }
    }
}
