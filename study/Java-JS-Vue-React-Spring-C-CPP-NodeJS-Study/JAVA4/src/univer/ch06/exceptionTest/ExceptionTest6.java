package univer.ch06.exceptionTest;

import java.io.IOException;

class CharInput {
    int nInput = 0;
    public char getInput() {
        try {
            nInput = System.in.read();
        } catch (IOException e) {
            System.out.println(e);
        }
        return (char) nInput;
    }
}

public class ExceptionTest6 {
    public static void main(String[] args) {
        CharInput charInput = new CharInput();
        System.out.println(charInput.getInput());
    }
}
