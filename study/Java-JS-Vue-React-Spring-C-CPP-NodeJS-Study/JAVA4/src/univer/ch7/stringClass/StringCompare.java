package univer.ch7.stringClass;

public class StringCompare {
    public static void main(String[] args) {
        String szStr1 = "test";
        String szStr2 = "test";
        // szStr1과 szStr2는 같다.
        if (szStr1 == szStr2)
            System.out.println("szStr1과 szStr2는 같다.");
        else
            System.out.println("szStr1과 szStr2는 다르다.");

        String szStr3 = new String("test");
        // szStr1과 szStr3는 다르다.
        if (szStr1 == szStr3)
            System.out.println("szStr1과 szStr3는 같다.");
        else
            System.out.println("szStr1과 szStr3는 다르다.");

    }
}
