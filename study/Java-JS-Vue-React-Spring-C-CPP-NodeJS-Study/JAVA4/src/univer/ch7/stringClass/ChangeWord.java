package univer.ch7.stringClass;

import java.util.Locale;

public class ChangeWord {
    public static void main(String[] args) {

        // 문자열 변환을 위한 메소드

        String szStr1 = " His stuff was terrific today. ";
        System.out.println(szStr1.trim()); //His stuff was terrific today.
        System.out.println(szStr1.toUpperCase());// HIS STUFF WAS TERRIFIC TODAY.
        System.out.println("HELP".toLowerCase());//help
        System.out.println("Helf me".replace("f", "p"));//Help me
    }
}
