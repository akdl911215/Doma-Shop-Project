package univer.ch09;

import java.nio.*;

public class ByteBufferTest {

    private static ByteBuffer buffer;
    private static boolean mark = false;

    public static void printState() {
        System.out.println("\tposition : "+ buffer.position());
        System.out.println("\tlimit\t : "+ buffer.limit());

        if (mark) {
            System.out.println("\tlimit\t : " + buffer.limit());
        }
        System.out.println("\tcapacity : " + buffer.capacity());
    }

    public static void printMsg(String str) {
        System.out.println("[" + str + "]");
    }

    public static void main(String[] args) throws Exception {

        buffer = ByteBuffer.allocate(9);
        printMsg("buffer is created.");
        printState();

        buffer.put(new byte[3]);
        printMsg("3 bytes are relative put.");
        printState();

        buffer.put(new byte[2]);
        printMsg("2 bytes are relative put.");
        printState();

        buffer.flip();
        printMsg("flip() is called.");
        printState();

        buffer.get(new byte[2]);
        printMsg("2 bytes are relative get.");
        printState();

        buffer.mark();
        mark = true;
        printMsg("mark() is called.");
        printState();

        buffer.get(new byte[3]);
        printMsg("3 bytes are relatively get.");
        printState();

        buffer.reset();
        printMsg("reset() is called.");
        printState();

        buffer.get(new byte[2]);
        printMsg("2 bytes are relatively get.");
        printState();

        buffer.rewind();
        printMsg("2 bytes are relatively put.");
        printState();

        buffer.clear();
        printMsg("clear() is called.");
        printState();
    }
}
