package univer.ch09;

import java.io.IOException;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.charset.Charset;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

public class FileChannelReadTest {
    public static void main(String[] args) throws IOException {
        Path path = Paths.get("c:\\java\\temp\\file.txt");
        FileChannel fileChannel = FileChannel.open(path,
                StandardOpenOption.READ);

        ByteBuffer buffer = ByteBuffer.allocate(1024 * 1024);
        Charset charset = Charset.defaultCharset();

        StringBuffer sb = new StringBuffer();
        int byteCount;
        while ((byteCount = fileChannel.read(buffer)) >= 0) {
            buffer.flip();
            sb.append(charset.decode(buffer));
            buffer.clear();
        }
        System.out.println(sb);
        fileChannel.close();

    }
}
