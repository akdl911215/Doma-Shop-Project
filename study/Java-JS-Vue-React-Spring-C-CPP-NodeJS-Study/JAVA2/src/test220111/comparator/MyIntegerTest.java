package test220111.comparator;


import java.util.Arrays;
import java.util.Comparator;

public class MyIntegerTest {
    public static void main(String[] args) {
        MyInteger[] arr = new MyInteger[10];

        // 객체 배열 초기화 (랜덤 값)
        for (int i = 0; i < 10; i++)
            arr[i] = new MyInteger((int)(Math.random() * 100));

        // 정렬 이전
        System.out.println("정렬 전 : ");

        for (int i = 0; i < 10; i++)
            System.out.print(arr[i].value + " ");

        System.out.println();

        Arrays.sort(arr, comp); // MyInteger에 대한 Comparoator을 구현한 익명객체를 넘겨줌

        // 정렬 이후
        System.out.println("정렬 후 : ");
        for (int i = 0; i < 10; i++)
            System.out.print(arr[i].value + " ");

        System.out.println();
    }
    
    
    static Comparator<MyInteger> comp = new Comparator<MyInteger>() {
        @Override
        public int compare(MyInteger o1, MyInteger o2) {
            return o1.value - o2.value;
        }
    };
}

class MyInteger {
    int value;

    public MyInteger(int value) {
        this.value = value;
    }
}
