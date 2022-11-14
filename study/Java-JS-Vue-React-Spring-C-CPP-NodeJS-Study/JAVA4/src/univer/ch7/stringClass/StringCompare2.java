package univer.ch7.stringClass;

public class StringCompare2 {
    public static void main(String[] args) {
        String szStr1 = "test";
        String szStr2 = "test";
        // szStr1과 szStr2는 같다.
        if (szStr1.equals("test"))
            System.out.println("szStr1과 szStr2는 같다.");
        else
            System.out.println("szStr1과 szStr2는 다르다.");

        String szStr3 = new String("test");
        // szStr1과 szStr3는 같다.
        if (szStr1.compareTo(szStr3) == 0) // compareTo() 같으면, 다르면 0이 아닌 정수값 리턴
            System.out.println("szStr1과 szStr3는 같다.");
        else
            System.out.println("szStr1과 szStr3는 다르다.");
    }
}
