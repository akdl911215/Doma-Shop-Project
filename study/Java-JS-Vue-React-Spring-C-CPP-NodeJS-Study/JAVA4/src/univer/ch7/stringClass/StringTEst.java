package univer.ch7.stringClass;

public class StringTEst {
    public static void main(String[] args) {
        // StringBuffer 와 StringBuilder 클래스의 차이점

        final String tmp = "abcde";
        long start, end;

        String str = new String();
        StringBuffer sb = new StringBuffer();
        StringBuilder sb2 = new StringBuilder();

        start = System.nanoTime();
        for (int i = 0; i < 10000; ++i) str += tmp;
        end = System.nanoTime();
        System.out.println((end - start) / 1000000.0 + " msecs");
        // 90.6092 msecs

        start = System.nanoTime();
        for (int i = 0; i < 10000; ++i) sb.append(tmp);
        end = System.nanoTime();
        System.out.println((end - start) / 1000000.0 + " msecs");
        // 0.507 msecs

        start = System.nanoTime();
        for (int i = 0; i < 10000; ++i) sb2.append(tmp);
        end = System.nanoTime();
        System.out.println((end - start) / 1000000.0 + " msecs");
        // 0.3998 msecs
    }
}
