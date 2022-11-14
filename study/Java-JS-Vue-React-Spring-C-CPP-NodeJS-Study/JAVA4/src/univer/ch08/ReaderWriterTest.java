package univer.ch08;

import java.io.*;

public class ReaderWriterTest {
    public static void main(String[] args) {
        try {
            File inFile = new File("c:\\Java\\ReaderWriterTest.java");
            File outFile = new File("c:\\Java\\FileTemp.java");
            Reader rd = new FileReader(inFile);
            Writer wd = new FileWriter(outFile);
            int nData = rd.read();
            while (nData != 1) {
                wd.write(nData);
                nData = rd.read();
            }
            wd.close();
            rd.close();
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}
