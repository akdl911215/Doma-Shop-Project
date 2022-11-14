package compare;

public class compare {
    public static void main(String[] args) {
        String str = "abcd";
        System.out.println("str : " + str);
        System.out.println("str address : " + System.identityHashCode(str));
        System.out.println("");

        String str2 = new String("abcd");
        System.out.println("str2 : " + str2);
        System.out.println("str2 address : " + System.identityHashCode(str2));

        if (str == str2) {
            System.out.println("");
            System.out.println("두개의 값이 같다");
        }
        else {
            System.out.println("");
            System.out.println("두개의 값이 다르다.");
        }
    }
}
