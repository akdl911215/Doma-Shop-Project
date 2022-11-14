package test220111.comparable;

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

        // 정렬 이후
        System.out.println("정렬 후 : ");
        for (int i = 0; i < 10; i++)
            System.out.print(arr[i].value + " ");

        System.out.println();
    }
}

class MyInteger implements Comparable<MyInteger>{
    int value;

    public MyInteger(int value) {
        this.value = value;
    }

    // 자기 자신의 value을 기준으로 파리미터 값과의 차이를 반환한다.
    @Override
    public int compareTo(MyInteger o) {
        return this.value - o.value;
    }
}
