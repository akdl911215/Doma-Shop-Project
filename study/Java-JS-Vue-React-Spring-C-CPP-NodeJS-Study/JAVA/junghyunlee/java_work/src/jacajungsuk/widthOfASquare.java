// 클래스와 객체

package jacajungsuk;

// 정사각형 클래스 구현
class Square {
    int length; // 길이

    // 넓이 반환
    int area() {
        return length * length;
    }
}

public class widthOfASquare {
    public static void main(String[] args) {
        // 객체 생성
        Square sq = new Square();

        // 필드 초기화 (값 변경)
        sq.length = 4;

        // 결과 출력
        System.out.printf("한 변의 길이가 %d인 정사형의 넓이 : %d", sq.length, sq.area());
    }
}
