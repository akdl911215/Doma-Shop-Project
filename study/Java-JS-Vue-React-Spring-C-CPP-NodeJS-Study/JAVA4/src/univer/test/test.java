package univer.test;


// 자바의 생성자 몸체에서 부모 클래스 생성자의 명시적 호출이 없는 경우, 생성자의 첫 줄에서 자동으로 호출되는 자바 문장을 적으시오.
class test11 {
    public int nData;

    public  test11 (int newData) {
       nData = newData;
    }

    public void test111Print() {
        System.out.println("nData = " + nData);
    }
}

class test2 extends test11 {

    public test2(int newData) {
        super(newData);
    }
}

public class test {
    public static void main(String[] args) {

    }
}
