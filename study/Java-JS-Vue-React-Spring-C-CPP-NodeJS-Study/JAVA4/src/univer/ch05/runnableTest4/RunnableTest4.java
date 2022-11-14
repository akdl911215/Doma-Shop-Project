package univer.ch05.runnableTest4;

// 람다식을 사용한 스레드 생성 2

public class RunnableTest4 {
    public static void main(String[] args) {
        Thread thread = new Thread(() -> System.out.println("my thread4"));
        thread.start(); // my thread4
    }
}
