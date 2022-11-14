package univer.ch09;

import java.nio.Buffer;
import java.nio.ByteBuffer;
import java.nio.CharBuffer;

public class BufferAllocateTest3 {
    public static void main(String[] args) throws Exception {
        byte[] barray = new byte[100];
        Buffer buffer = ByteBuffer.wrap(barray);
        System.out.println("buffer = " + buffer);

        char[] carray = new char[100];
        Buffer cbuffer = CharBuffer.wrap(carray, 0, 50);
        System.out.println("cbuffer = " + cbuffer);
    }
}
