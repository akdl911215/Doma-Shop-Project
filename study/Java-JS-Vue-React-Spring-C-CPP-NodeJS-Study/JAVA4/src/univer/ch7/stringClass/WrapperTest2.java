package univer.ch7.stringClass;

public class WrapperTest2 {
    public static void main(String[] args) {

        // String > Number 변환

        byte b = Byte.parseByte("8");
        System.out.println(b); // 8

        short s = Short.parseShort("12");
        System.out.println(s); // 12

        int n = Integer.parseInt("123");
        System.out.println(n); // 123

        long l = Long.parseLong("1234");
        System.out.println(l); // 1234

        float f = Float.parseFloat("12.3");
        System.out.println(f); // 12.3

        double d = Double.parseDouble("1.23E2");
        System.out.println(d); // 123.0


        // Number > String 변환

        String str1 = Byte.toString((byte) 3);
        System.out.println(str1); // 3

        String str2 = Short.toString((short) 3);
        System.out.println(str2); // 3

        String str3 = Integer.toString(4);
        System.out.println(str3); // 4

        String str4 = Long.toString(5);
        System.out.println(str4); // 5

        String str5 = Float.toString((float) 1.34);
        System.out.println(str5); // 1.34

        String str6 = Double.toString(1.234);
        System.out.println(str6); // 1.234

    }
}
