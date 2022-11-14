package univer.ch05.runnableTest3;

// 람다식을 사용한 스레드 생성

public class RunnableTest3 {
    public static void main(String[] args) {
        Runnable runnable = () -> {
            System.out.println("my thread3");
        };

        Thread thd = new Thread(runnable);
        thd.start(); // my thread3
    }
}
