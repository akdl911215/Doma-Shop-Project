package compare;

public class compare4 {
    public static void main(String[] args) {
        String testStr = new String("test");
        System.out.println("testStr : " + System.identityHashCode(testStr));
        String testStr2 = "test";
        System.out.println("testStr2 : " + System.identityHashCode(testStr2));
        String testStr3 = "test";
        System.out.println("testStr3 : " + System.identityHashCode(testStr3));
        String testStr4 = new String("test");
        System.out.println("testStr4 : " + System.identityHashCode(testStr4));
    }
}
