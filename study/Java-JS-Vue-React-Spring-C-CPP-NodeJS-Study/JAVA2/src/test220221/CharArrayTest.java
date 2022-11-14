package test220221;

public class CharArrayTest {
    public static void main(String[] args) {

        String str = "Hello World";
        char[] charArr = str.toCharArray();

        for (int i = 0; i < charArr.length; i++) {
            System.out.print(charArr[i] + " ");
        }
    }
}
