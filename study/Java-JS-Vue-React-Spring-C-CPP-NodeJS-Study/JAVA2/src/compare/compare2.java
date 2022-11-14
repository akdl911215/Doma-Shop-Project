package compare;

public class compare2 {
    public static void main(String[] args) {
        String str = "Test String";
        System.out.println("str : " + str);
        System.out.println("str address : " + System.identityHashCode(str));

        String str2 = new String("Test String");
        System.out.println("\nstr2 : " + str2);
        System.out.println("str2 address : " + System.identityHashCode(str2));

        System.out.println(" ");
        System.out.println(str == str2);
    }
}
