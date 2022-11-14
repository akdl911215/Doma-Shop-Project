package test220121;

public class insertMethodTest {
    public static void main(String args[]) {
        StringBuffer sb = new StringBuffer("Java 만세 !!");
        System.out.println("원본 문자열 : " + sb);
        System.out.println(sb.insert(5, "Script "));
        System.out.println("insert() 사용 후 문자열 : " + sb);
    }
}
