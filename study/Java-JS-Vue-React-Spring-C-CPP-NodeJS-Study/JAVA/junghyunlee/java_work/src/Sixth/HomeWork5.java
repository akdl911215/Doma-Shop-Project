package Sixth;

public class HomeWork5 {
    public static void main(String[] args) {
        // 1 ~ 100 까지 숫자중 3 의 배수만 출력해보자!
        final int fixNum = 100;
        int[] arr = new int[fixNum];

        for(int i = 1; i <= fixNum; i++){
            if(i % 3 ==0) {
                System.out.println(i);
            }
        }
    }
}
