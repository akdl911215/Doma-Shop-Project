package univer.ch09;

import java.nio.Buffer;
import java.nio.ByteBuffer;

public class BufferAllocateTest {
    public static void main(String[] args) {
        int c = 1024 * 1024 * 1024;
        Buffer buffer = ByteBuffer.allocate(c);
        System.out.println("c = " + c + " bytes buffer is created.");

        Buffer buffer_direct = ByteBuffer.allocateDirect(c);
        System.out.println("c = " + c + " bytes direct buffer is created.");
    }
}
