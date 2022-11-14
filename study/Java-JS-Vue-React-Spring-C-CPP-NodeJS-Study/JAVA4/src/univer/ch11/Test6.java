package univer.ch11;

class MyThread5 extends Thread {
    Thread thdNext = null;
    public MyThread5(String szName) {
        super(szName);
    }

    @Override
    public void run() {
        for (int i = 0; i < 100; ++i) {
            try {
                Thread.sleep(1000000);
            } catch (InterruptedException e) {
                System.out.print(getName() + " ");
                if(thdNext.isAlive()) thdNext.interrupt();
            }
        }
    }

    public void setNextThread(Thread t) {
        thdNext = t;
    }

}

public class Test6 {
    public static void main(String[] args) {
        MyThread5 my_thread1 = new MyThread5("th1");
        MyThread5 my_thread2 = new MyThread5("th2");
        MyThread5 my_thread3 = new MyThread5("th3");

        my_thread1.setNextThread(my_thread2);
        my_thread2.setNextThread(my_thread3);
        my_thread3.setNextThread(my_thread1);

        my_thread1.start();
        my_thread2.start();
        my_thread3.start();

        try {
            my_thread1.interrupt();
            my_thread1.join();
            my_thread2.join();
            my_thread3.join();
        } catch (InterruptedException e) {
            System.out.println(e);
        }
        System.out.println("main");
    }
}
