package univer.ch09;

import java.nio.ByteBuffer;
import java.nio.IntBuffer;
import java.util.Arrays;

public class TransformTest3 {
    public static void main(String[] args) {
        int[] src = {10, 20, 30, 40};
        int[] dst;

        System.out.println(Arrays.toString(src));
        ByteBuffer byteBuffer;
        IntBuffer isrcBuffer, idstBuffer;

        // java.nio.IntBuffer 클래스 의 wrap() 메서드 는 int 배열을 버퍼로 래핑하는 데 사용
        isrcBuffer = IntBuffer.wrap(src);
        // Buffer가 포함할 수 있는 데이터의 최대 갯수이다.
        // 이는 Buffer가 생성될 때에만 지정할 수 있고, 변경할 수 없다.
        byteBuffer = ByteBuffer.allocate(isrcBuffer.capacity() * 4);

        for (int i = 0; i < isrcBuffer.capacity(); ++i) {
            byteBuffer.putInt(isrcBuffer.get(i));
        }

        byteBuffer.flip();

        idstBuffer = byteBuffer.asIntBuffer();
        dst = new int[idstBuffer.capacity()];

        for (int i = 0; i < dst.length; ++i) {
            dst[i] = idstBuffer.get();
        }

        System.out.println(Arrays.toString(dst));
    }
}
