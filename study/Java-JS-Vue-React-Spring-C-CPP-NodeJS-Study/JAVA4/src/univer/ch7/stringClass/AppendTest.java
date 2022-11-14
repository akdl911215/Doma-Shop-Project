package univer.ch7.stringClass;

public class AppendTest {
    public static void main(String[] args) {
        String szStr1 = "선발투수";
        StringBuffer sbBuffer = new StringBuffer(szStr1);
        sbBuffer.append(' ').append("박찬호");
        szStr1 = sbBuffer.toString();
        System.out.println(szStr1);
        // 선발투수 박찬호
    }
}
