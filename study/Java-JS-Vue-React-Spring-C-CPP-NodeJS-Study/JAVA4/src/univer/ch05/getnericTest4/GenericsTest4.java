package univer.ch05.getnericTest4;

class Data4<T> {
    private T t;
    public Data4(T t) {
        this.t = t;
    }
    public void set(T t) {
        this.t = t;
    }
    public T get() {
        return t;
    }
}

public class GenericsTest4 {
    public static void main(String[] args) {
        Data4 data = new Data4("hello");
        System.out.println(data.get());
    }
}
