package univer.ch05.runableTest2;

// 익명 객체를 이용한 스레드 생성

public class RunableTest2 {
    public static void main(String[] args) {
        Runnable runnable = new Runnable() {
            @Override
            public void run() {
                System.out.println("my thred2");
            }
        };

        Thread thread = new Thread(runnable);
        thread.start(); // my thred2
    }
}
