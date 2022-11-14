package compare;

public class compare5 {
    public static void main(String[] args) {
        String str = "testStr";
        String str2 = "testStr";

        System.out.println("str : " + str);
        System.out.println("str2 : " + str2);
        System.out.println("str 주소 값 : " + System.identityHashCode(str));
        System.out.println("str2 주소 값 : " + System.identityHashCode(str2));


        String str3 = new String("testStr");
        String str4 = new String("testStr");

        System.out.println("\nstr3 : " + str3);
        System.out.println("str4 : " + str4);
        System.out.println("str3 주소 값 : " + System.identityHashCode(str3));
        System.out.println("str4 주소 값 : " + System.identityHashCode(str4));

    }
}
