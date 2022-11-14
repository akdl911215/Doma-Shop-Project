package univer.ch11;

class MyThread4 implements Runnable {
    public void run() {
        for (int i = 0; i < 100; ++i) {
            System.out.print((Thread.currentThread()).getName() + " ");
            Thread.yield();
        }
    }
}

public class JoinTest {
    public static void main(String[] args) throws InterruptedException {

        Thread my_thread1 = new Thread(new MyThread4(), "thd1");
        Thread my_thread2 = new Thread(new MyThread4(), "thd2");

        my_thread1.start();
        my_thread2.start();

        my_thread1.join();
        my_thread2.join();

        System.out.println("main thread");
    }
}
