package univer.ch05.genericTEst2;

class Data <T> {
    private T t;
    public void set(T t) {
        this.t = t;
    }
    public T get() {
        return t;
    }
}

public class GenericsTest2 {
    public static void main(String[] args) {
        Data<String> data = new Data<String>();
        Integer i = new Integer(20);
//        data.set(i);
        String s = (String) data.get();
    }
}
