package univer.ch11;

class SharedResource {
    int nRes = 0;
//    public void incRes(String szThdName) {
    public synchronized void incRes(String szThdName) {
        try {
            Thread.sleep(2);
        } catch (Exception e) {
            System.out.println(e);
        }

        nRes++;
        System.out.println("[" + szThdName + " " + nRes + "]");
    }
}

class MyThread6 extends Thread {
    static SharedResource sr;
    String szName;
    public MyThread6(String szName, SharedResource sr) {
        super(szName);
        this.szName = szName;
        this.sr = sr;
    }
    public void run() {
        for (int i = 0; i < 100; ++i) {
            sr.incRes(szName);
        }
    }
}

public class ThreadTest {
    public static void main(String[] args) {
        SharedResource sr = new SharedResource();
        MyThread6[] thds = new MyThread6[10];
        for (int i = 0; i < thds.length; ++i) {
            thds[i] = new MyThread6("thd" + (i + 1), sr);
            thds[i].start();
        }
    }
}
