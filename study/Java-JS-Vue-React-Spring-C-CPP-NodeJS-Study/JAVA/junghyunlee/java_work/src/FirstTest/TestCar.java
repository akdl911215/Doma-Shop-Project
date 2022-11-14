package FirstTest;

// Car 라는 class
public class TestCar {

    String color; // 색상을 정하는 객체 String 타입
    boolean power; // 전원을 true / false 를 결정하는 객체 boolean
    int speed; // 속도를 나타내는 int 타입의 객체

    void power() {
        power = !power;
    }

    void speedUp() {
        ++speed;
    }

    void speedDown() {
        --speed;
    }
}
