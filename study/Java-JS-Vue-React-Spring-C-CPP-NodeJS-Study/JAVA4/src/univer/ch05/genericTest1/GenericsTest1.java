package univer.ch05.genericTest1;

class Data {
    private Object object;
    public void set(Object object) {
        this.object = object;
    }
    public Object get() {
        return object;
    }
}

public class GenericsTest1 {
    public static void main(String[] args) {
        Data data = new Data();
        Integer i = new Integer(20);
        data.set(i);
        String s = (String)data.get();

        System.out.println(s);
    }
}
