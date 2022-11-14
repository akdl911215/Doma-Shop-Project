package univer.ch08;

import java.io.*;

public class FileOutputStreamTest {
    public static void main(String[] args) {
        try {
            File inFile, outFile;
            inFile = new File("c:\\Java\\FileInputStreamTest.java");
            outFile = new File("c:\\Java\\FileTemp.java");
            InputStream is = new FileInputStream(inFile);
            OutputStream os = new FileOutputStream(outFile);
            int nData;
            nData = is.read();
            while (nData != -1) {
                os.write(nData);
                nData = is.read();
            }
            is.close();
            os.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
