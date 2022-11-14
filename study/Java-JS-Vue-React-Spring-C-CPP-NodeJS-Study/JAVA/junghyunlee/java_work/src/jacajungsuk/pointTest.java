package jacajungsuk;

class Point {
    int x;
    int y;

    Point (int _x, int _y) {
        x = _x;
        y = _y;
        //System.out.println("x = " + x);
        //System.out.println("-x = " + _x );
        //System.out.println("y = " + y);
        //System.out.println("_y = " + y);
    }

    String toStr() {
        // 지정된 형식에 따라 개체의 값을 문자열로 변환하여 다른 문자열에 삽입
        return String.format("(%d, %d)", x, y);
    }

    static double distance(Point p, Point q) {
        //System.out.println("p = " + p);
        //System.out.println("q = " + q);
        double dX = p.x - q.x; // x좌표의 변화량
        double dY = p.y - q.y; // y좌표의 변화량
        //System.out.println("p.x = " + p.x);
        //System.out.println("q.x = " + q.x);
        //System.out.println("p.y = " + p.y);
        //System.out.println("q.y = " + q.y);

        // Math.sqrt = 제곱근(루트)
        // 제곱근의 '루트'라는 것은 제곱의 반대입니다.
        // 3을 두 번 곱해서 나온 값 9가 3의 제곱값이라면, 루트9는 '어떤 수'를 두 번
        // 곱했길래 9가 나왔을까요?'에 해당되는 '어떤 수'를 의미합니다.
        // 어떤 수를 제곱했길래 9가 나왔죠? 3입니다. 그래서 루트9 = 3입니다.
        // 루트25 = 5, 루트36 = 6 입니다.ㅂ

        // Math.sqrt = 25 가 된다.
        // dx * dx / dy * dy 를 해주면 제곱의 형식이 된다
        // 그러면 음수이거나 양수이거 상관없이 양수가 되서 출력이된다.
        // 그리고 제곱이 된 양수값을 루트(제곱근)으로 원래 값을 출력한다.
        return Math.sqrt((dX * dX) + (dY * dY));
    }
}

public class pointTest {
    public static void main(String[] args) {
        // 객체 생성
        Point p1 = new Point(0, 0);
        Point p2 = new Point(3, 4);

        // 거리 계산
        double dist = Point.distance(p1, p2);

        // 결과 출력
        System.out.printf("두 점 A%s, B%s 사이의 거리 : %.2f", p1.toStr(), p2.toStr(), dist);
    }
}
