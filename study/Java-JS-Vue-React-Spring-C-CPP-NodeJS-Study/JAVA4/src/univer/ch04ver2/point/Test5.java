package univer.ch04ver2.point;

public class Test5 {
    public static void main(String[] args) {
        Movable movable;
        Scalable scalable;
        Point point = new Point();

        movable = point;
//        movable.mul(3.0); // 컴파일 에러
        movable.add(3.0, 3.0); // movable add. suv는 가능하다
        movable.sub(3.0, 3.0);

        scalable = point;
//        scalable.add(3.0, 3.0); // 컴파일 에러
        scalable.div(3.0);
        scalable.mul(3.0);

        point.mul(3.0);
        point.add(3.0, 3.0);
    }
}
