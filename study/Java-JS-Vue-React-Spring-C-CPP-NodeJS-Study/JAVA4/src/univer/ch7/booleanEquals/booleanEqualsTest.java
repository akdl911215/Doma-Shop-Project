package univer.ch7.booleanEquals;

class Man1 {}
class Man2 {
    public int nData;
    public Man2(int nNew) {
        nData = nNew;
    }
    public boolean equals(Object obj) {
        // instanceof 연산자는 객체가 어떤 클래스인지, 어떤 클래스를 상속받았는지
        //              확인하는데 사용하는 연산자
        if (obj instanceof Man2) {
            Man2 m = (Man2) obj;
            if (this.nData == m.nData) return true;
        }
        return false;
    }
}

public class booleanEqualsTest {
    public static void main(String[] args) {
        Man1 m1 = new Man1();
        Man1 m2 = new Man1();
        System.out.println("m1 : " + m1); // univer.ch7.booleanEquals.Man1@6aaa5eb0
        System.out.println("m2 : " + m2); // univer.ch7.booleanEquals.Man1@3498ed
        System.out.println("m1 == m2 : " + (m1 == m2)); // false
        System.out.println("m1.equals(m2) : " + m1.equals(m2)); // false

        Man2 m3 = new Man2(1);
        Man2 m4 = new Man2(1);
        System.out.println("m3 : " + m3); // univer.ch7.booleanEquals.Man2@73f792cf
        System.out.println("m4 : " + m4); // univer.ch7.booleanEquals.Man2@2ed94a8b
        System.out.println("m3 == m4 : " + (m3 == m4)); // false
        System.out.println("m3.equals(m4) : " + m3.equals(m4)); // true
    }
}
