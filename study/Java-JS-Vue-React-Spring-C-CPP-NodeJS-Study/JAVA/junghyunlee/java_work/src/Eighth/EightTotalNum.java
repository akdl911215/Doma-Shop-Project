package Eighth;
// 3 ~ 33 까지의 홀수 합산 결과를 출력해보자!

public class EightTotalNum {

    int cnt = 0;

    public void PrintNum(int startNum, int endNum) {
        for (int i = startNum; i <= endNum; i++) {
            System.out.printf("%4d", i);
            cnt++;
            if (cnt % 5 == 0) {
                System.out.println(" ");
            }
        }
    }

    public void PrintNum2(int startNum, int endNum, int oderNum) {
        for (int i = startNum; i <= endNum; i++) {
            if (i % oderNum == 0) {
                System.out.printf("%4d", i);
                cnt++;
                if (cnt % 5 == 0) {
                    System.out.println(" ");
                }
            }
        }
    }

    public void PrintNum3(int startNum, int endNum, int choiceNum) {
        int oddNumbers = 0;
        for (int i = startNum; i <= endNum; i++) {
            if (i % choiceNum == 0) {
                oddNumbers += i;
            }
        }
        System.out.println("홀수의 총 합 = " + oddNumbers);
    }

    public void MultiplicationTable(int orderNum){
        System.out.printf("%d단을 입력하셨습니다\n", orderNum);
        for(int i = 1; i <= 9; i++){
            System.out.printf("%d x %d = %2d 입니다.\n", orderNum, i, orderNum * i);
        }
    }
}



