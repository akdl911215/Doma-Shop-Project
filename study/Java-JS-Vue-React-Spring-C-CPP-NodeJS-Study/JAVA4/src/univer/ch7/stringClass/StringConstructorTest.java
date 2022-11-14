package univer.ch7.stringClass;

public class StringConstructorTest {
    public static void main(String[] args) {
        //         System.out.println(System.identityHashCode());

        String szStr1 = "Java Application";
        System.out.println(System.identityHashCode(szStr1));
        // 1134712904

        String szStr2, szStr3;
        szStr2 = "Java Applet";
        System.out.println(System.identityHashCode(szStr2));
        // 985922955
        szStr3 = szStr2;
        System.out.println(System.identityHashCode(szStr3));
        // 985922955

        String szStr4 = new String("Test String");
        System.out.println(System.identityHashCode(szStr4));
        // 1435804085

        String szStr5 = new String("Java Applet");
        System.out.println(System.identityHashCode(szStr5));
        // 1784662007 > szStr2, szStr3 와 글자는 같으나 주소값이 다름

        String szStr6 = new String(szStr2);
        System.out.println(System.identityHashCode(szStr6));
        // 997110508 위와 동일

        String szStr7 = new String(szStr3);
        System.out.println(System.identityHashCode(szStr7));
        // 509886383 위와 동일
    }
}
