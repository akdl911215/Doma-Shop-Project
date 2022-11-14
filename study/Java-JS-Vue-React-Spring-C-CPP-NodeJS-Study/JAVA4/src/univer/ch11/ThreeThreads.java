package univer.ch11;

class MyThread extends Thread {
    public MyThread(String szName) {
        super(szName);
    }

    public void run() {
        for (int i = 0; i < 100; ++i) {
            System.out.print(getName() + " ");
        }
    }
}

public class ThreeThreads {
    public static void main(String[] args) {
        MyThread my_thread1 = new MyThread("th1");
        MyThread my_thread2 = new MyThread("th2");
        MyThread my_thread3 = new MyThread("th3");

        my_thread1.start();
        my_thread2.start();
        my_thread3.start();

        System.out.println("main");

    }
}
