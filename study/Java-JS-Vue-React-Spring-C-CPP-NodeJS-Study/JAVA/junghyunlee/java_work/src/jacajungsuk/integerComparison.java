package jacajungsuk;

// 3개의 정수를 입력받는다.
// 3개의 정수중 중간값만 출력한다.

import java.util.Scanner;

public class integerComparison {
    public static void main(String[] args) {

        int numA, numB, numC;

        System.out.print("A의 값을 입력하시오 : ");
        Scanner scanA = new Scanner(System.in);
        numA = scanA.nextInt();
        System.out.print("B의 값을 입력하시오 : ");
        Scanner scanB = new Scanner(System.in);
        numB = scanB.nextInt();
        System.out.print("C의 값을 입력하시오 : ");
        Scanner scanC = new Scanner(System.in);
        numC = scanC.nextInt();

        // 중간값을 찾을려면?
        // 숫자를 비교해야한다. 숫자를 비교할려면 조건문을 사용해야한다.
        if ((numA < numB && numA > numC) || (numA < numC && numA > numB)){
            System.out.println("A가 중간값 입니다 = " + numA);
        } else if ((numB < numA && numB > numC) || (numB < numC && numB > numA)){
            System.out.println("B가 중간값 입니다 = " + numB);
        } else {
            System.out.println("C가 중간값 입니다 = " + numC);
        }
    }
}
