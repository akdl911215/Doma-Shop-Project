package Eighth;

public class SumSubNUm {
    // 3의 배수는 더하고 5 의 배수는 뺀다.
    // 덧셈만한 최종 결과값과 뺄셈만한 최종 결과를 확인해보자!
    // 마지막으로 두 값의 합을 return(ᄇᆘᆫ환)하도록 매서드를 만들어보

    public void printNumber(int start, int end){
        final int oderThirdNum = 3;
        final int orderFifthNum = 5;
        int orderThirdNum, oderFifthNum;

        int i, thirdSum = 0, fifthSum = 0;

        for(i = start; i <= end; i++) {
            if(i % oderThirdNum == 0){
                thirdSum += i;
            } else if(i % orderFifthNum == 0){
                fifthSum += i;
            }
        }
        System.out.printf("%d의 배수의 합 = %d\n", oderThirdNum, thirdSum);
        System.out.printf("%d의 배수의 합 = %d\n", orderFifthNum, fifthSum);
        System.out.printf("%d 의 배수와 %d 의 배수의 합 = %d\n",
                oderThirdNum, orderFifthNum, oderThirdNum + orderFifthNum);
    }
}
