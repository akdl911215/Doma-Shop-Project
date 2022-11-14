package univer.ch08;

import java.io.File;
import java.io.FileInputStream;
import java.io.InputStream;

public class FileInputStreamTest {
    public static void main(String[] args) {
        try {
            File file;
            file = new File("c:\\Java\\FileInputStreamTest.java");
            InputStream is = new FileInputStream(file);
            System.out.println("is: " + is);
            int nData;
            nData = is.read();
            System.out.println("nData : " + nData);
            while (nData != -1) {
                System.out.println(nData);
                nData = is.read();
            }
            is.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
