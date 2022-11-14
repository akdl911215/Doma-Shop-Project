package Sixth;

public class HomeWork6 {
    public static void main(String[] args) {
        // 5번 문제에서 출력한 값들을 출력하지 않고
        // 배열에 저장하고 출력하도록 한다.
        final int fixNum = 100;
        int[] arr = new int[fixNum];

        for(int i = 1; i <= fixNum; i++){
            if(i % 3 ==0) {
                //System.out.printf("arr[%d] = %d\n", i - 1 , i);
                arr[i] = i;
                System.out.printf("arr[%d] = %d\n", i - 1 , arr[i]);
            }
        }
    }
}
