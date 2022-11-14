package univer.ch7.stringClass;

import java.io.UnsupportedEncodingException;

public class StringConstructorTest2 {
    public static void main(String[] args) {

        String szStr1 = "Java Application";
        String szStr2 = "Java Application";
        String szStr3 = new String("Java Application");

        // 생성자
        // public String() : 빈 문자열 객체생성
        String szStr4 = new String();
        System.out.println(szStr4);
        System.out.println();

        // public String(String original) : original 문자열의 내용을 갖는 객체생성
        String szStr5 = new String("original str");
        System.out.println(szStr5); // original
        System.out.println();

        // public String(char[] value, int offset, int count) :
        // 문자형 배열 value의 offset부터 count 개수만큼의 내용을 갖는 객체 생성
        char value[] = {'a', 'b', 'c', 'd'};
        System.out.println(value[1]); // b
        String szStr6 = new String(value, 2, 2);
        System.out.println(szStr6); // cd
        char c9[] = {'h', 'e', 'l', 'l', 'o'};
        String s9 = new String(c9, 1, 3);
        System.out.println(s9); // ell

        // public String(byte[] bytes, String chasetName) :
        // charsetName에 지정된 인코딩 방식으로 변환하여 객체생성
        byte[] bytes = {104, 101, 108, 108, 111};
        try {
            String szStr7 = new String(bytes, "ASCII");
            System.out.println(szStr7); // hello
        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }


    }
}
