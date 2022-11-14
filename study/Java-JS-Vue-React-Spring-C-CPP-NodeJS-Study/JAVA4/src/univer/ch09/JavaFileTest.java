package univer.ch09;

import java.io.File;
import java.io.IOException;

public class JavaFileTest {
    public static void main(String[] args) {
        File file = new File("C:\\java\\FilesTest3.java");
        System.out.println("exists : " + file.exists());
        System.out.println("==========================");

        try {
            file.createNewFile();
            System.out.println("파일 생성 완료!!");
        } catch (IOException e) {
            e.printStackTrace();
            file.delete();
            System.out.println("exception 후 file delete");
            System.out.println("exists : " + file.exists());
        } finally {
            System.out.println("finally exists : " + file.exists());
        }
    }
}
