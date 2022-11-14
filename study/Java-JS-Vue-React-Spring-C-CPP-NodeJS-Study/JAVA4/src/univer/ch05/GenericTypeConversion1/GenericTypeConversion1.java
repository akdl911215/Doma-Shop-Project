package univer.ch05.GenericTypeConversion1;

class conversionDataM<T> {
    private T t;
    public void set(T t) {
        this.t = t;
    }
    public T get() {
        return t;
    }
}

public class GenericTypeConversion1 {
    public static void main(String[] args) {
        conversionDataM<Number> data = new conversionDataM<Number>();
        data.set(new Integer(10));
        System.out.println(data.get());
        data.set(new Double(10.1));
        System.out.println(data.get());
    }
}
