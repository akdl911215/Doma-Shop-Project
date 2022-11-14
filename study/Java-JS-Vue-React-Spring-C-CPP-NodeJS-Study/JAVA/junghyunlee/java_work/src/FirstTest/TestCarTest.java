package FirstTest;

public class TestCarTest {
    public static void main(String[] args) {
        TestCar c = new TestCar();
        c = new TestCar();
        c.speed = 10;
        c.speedDown();
        System.out.println("현재 스피드는 : " + c.speed);
    }
}
