package test220121;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;

public class BufferWriterTest {
    public static void main(String[] args) throws IOException { // IOException : 자바 입출력 예외처리
        BufferedWriter bw = new BufferedWriter(new FileWriter("bufferedWriter.txt"));
        bw.write("Hello\n");
        bw.newLine(); // 개행
        bw.write("I am writing\n");
        bw.flush(); // 데이터 출력
        bw.close();
        
    }
}
