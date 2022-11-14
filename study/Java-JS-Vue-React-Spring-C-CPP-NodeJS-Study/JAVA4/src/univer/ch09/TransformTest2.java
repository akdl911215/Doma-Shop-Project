package univer.ch09;

import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.util.Arrays;

public class TransformTest2 {
    public static void main(String[] args) {
        String[] data = {"안녕하세여. 여러분," +
                "Java 프로그래밍 언어의 세계로 오신 것을 환영합니다." +
                "JDK를 설치하는 방법에서부터" +
                "Java 프로그램을 compile하고 실행시키는" +
                "모든 방법에 대해 공부해 봅시다."};

        Charset cs = Charset.defaultCharset();
        ByteBuffer buffer = ByteBuffer.allocate(1024 * 1024);

        for (int i = 0; i < data.length; ++i) {
            ByteBuffer tmp = cs.encode(data[i]);
            buffer = buffer.put(tmp);
        }

        byte[] b_total = new byte[buffer.flip().limit()];
        int index = 0;
        while (buffer.position() < buffer.limit()) {
            byte b = buffer.get();
            Arrays.fill(b_total, index, index + 1, b);
            index++;
        }

        StringBuffer sb = new StringBuffer();
        sb.append(cs.decode(ByteBuffer.wrap(b_total)));
        System.out.println(sb);
    }
}
