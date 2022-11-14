package jacajungsuk;

import java.util.Arrays;

public class arr_test {
    public static void main(String[] args) {
        int[] iArr = { 1, 2, 3, 4, 5};

        System.out.print("for 문을 이용한 값 = ");
        for(int i = 0; i < iArr.length; i++) {
            System.out.print( iArr[i] + ", ");
        }
        System.out.println();


        // 위의 for 문을 밑의 코드처럼 간단히 변경이 가능하다.
        System.out.println("Arrays.toString(iArr)을 사용한 출력 = " + Arrays.toString(iArr));

        // 배열을 가리키는 참조변수 iArr의 값을 출력
        System.out.println("참조변수 iArr의 값 = " + iArr);

        // 예외적으로 char배열은 println메서드로 출력하면 각 요소가 구분자 없이 그대로
        // 출력되는데, 이것은 println메서드가 char 배열일 때만 이렇게 동작하도록 작성되었기 때
        char[] chArr = {'a','b', 'c', 'd'};
        System.out.println(chArr);
    }
}
