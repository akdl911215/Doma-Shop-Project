package univer.ch11;

class MyThread2 extends Thread {
    public MyThread2(String szName) {
        super(szName);
    }

    public void run() {
        for (int i = 0; i < 100; ++i) {
            String num = "";
            if (i < 10) num = "0" + i;
            else num = String.valueOf(i);

            System.out.print(getName() + "(" + num + ")");
        }
    }
}

public class PriorityTest {
    public static void main(String[] args) {
        MyThread2 my_thread1 = new MyThread2("th1");
        MyThread2 my_thread2 = new MyThread2("th2");
        MyThread2 my_thread3 = new MyThread2("th3");

        my_thread1.setPriority(Thread.MAX_PRIORITY);
        my_thread2.setPriority(Thread.NORM_PRIORITY);
        my_thread3.setPriority(Thread.MAX_PRIORITY);

        my_thread1.start();
        my_thread2.start();
        my_thread3.start();
    }
}
