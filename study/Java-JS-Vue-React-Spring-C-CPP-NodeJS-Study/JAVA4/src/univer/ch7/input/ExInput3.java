package univer.ch7.input;

import java.io.IOException;

public class ExInput3 {
    public static void main(String[] args) throws IOException {
        int nInput = 0;
        System.out.print("Input an integer: ");
        nInput = System.in.read();
        nInput -= '0';
        System.out.println(nInput);
    }
}
