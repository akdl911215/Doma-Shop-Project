package univer.ch7.input;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class ExInput4 {
    public static void main(String[] args) throws IOException {
        String szInputLine;
        int nValue;
        InputStreamReader isr = new InputStreamReader(System.in);
        BufferedReader is = new BufferedReader(isr);
        szInputLine = is.readLine();
        nValue = Integer.parseInt(szInputLine);
        System.out.println(nValue);
        is.close();
    }
}
