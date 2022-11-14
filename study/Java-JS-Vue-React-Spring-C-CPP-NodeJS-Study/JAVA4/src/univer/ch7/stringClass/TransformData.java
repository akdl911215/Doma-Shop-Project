package univer.ch7.stringClass;

public class TransformData {
    public static void main(String[] args) {

        // 다른 자료형을 문자열형으로 변환

        System.out.println(String.valueOf(123)); // 123
        System.out.println(String.valueOf(5 > 3)); // true
        System.out.println(String.valueOf(3.0)); // 3.0
        System.out.println(String.valueOf('c')); // c
        int[] a = new int[5];
        System.out.println(String.valueOf(a)); // [I@34ce8af7
        char[] b = {'j', 'a', 'v', 'a'};
        System.out.println(String.valueOf(b)); // java

    }
}
