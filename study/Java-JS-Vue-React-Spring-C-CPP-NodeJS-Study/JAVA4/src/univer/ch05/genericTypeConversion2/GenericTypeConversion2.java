package univer.ch05.genericTypeConversion2;

class conversionData2<T> {
    private T t;
    public void set2(T t) {
        this.t = t;
    }
    public T get2() {
        return t;
    }
}

public class GenericTypeConversion2 {
    public static void main(String[] args) {
//        conversionData2<Number> data = new conversionData2<Integer>(); // 컴파일 오류
//        conversionData2<Number> data = new conversionData2<Object>(); // 컴파일 오류
//        conversionData2<Integer> data = new conversionData2<Number>(); // 컴파일 오류
//        conversionData2<Object> data = new conversionData2<Number>(); // 컴파일 오류
        conversionData2<Number> data = new conversionData2<Number>();

        data.set2(new Integer(10));
        System.out.println(data.get2());
        data.set2(new Double(10.1));
        System.out.println(data.get2());
    }
}