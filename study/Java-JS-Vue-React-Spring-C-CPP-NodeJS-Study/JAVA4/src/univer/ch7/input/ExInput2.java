package univer.ch7.input;

import java.io.IOException;

public class ExInput2 {
    public static void main(String[] args) throws IOException {
        char cInput = 0;
        System.out.print("Input a characters : ");

        while (true) {
            cInput = (char) System.in.read();

            if (cInput == 13 || cInput == 10) continue;
            if (cInput == 'q') break;
            System.out.println(cInput);
            System.out.print("Input a characters : ");
        }
    }
}
