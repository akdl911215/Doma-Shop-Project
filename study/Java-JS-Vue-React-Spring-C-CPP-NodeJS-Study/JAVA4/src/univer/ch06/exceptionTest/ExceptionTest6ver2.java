package univer.ch06.exceptionTest;

import java.io.IOException;

class CharInput2 {
    int nInput = 0;

    // char : 문자를 저장하기 위한 변수를 선언할때 사용
    //        하나의 문자만 저장할 수 있다.
    public char getInput() throws IOException {
        nInput = System.in.read();

        return (char) nInput;
    }
}

public class ExceptionTest6ver2 {
    public static void main(String[] args) throws IOException {
        CharInput2 charInput2 = new CharInput2();
        System.out.println(charInput2.getInput()); // 32 입력 3 , 3 입력 3
    }
}
