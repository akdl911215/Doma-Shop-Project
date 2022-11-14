package Sixth;

public class HomeWork1 {
    public static void main(String[] args) {
        // 7개 짜리 int 형 배열을 만들어보자!

        final int FixNum = 7;
        int[] arr = new int[FixNum];

        for (int i = 0; i < FixNum; i++) {
            arr[i] = i;
            System.out.printf("%d째 배열 = %d입니다\n", i, arr[i]);
        }
    }
}
