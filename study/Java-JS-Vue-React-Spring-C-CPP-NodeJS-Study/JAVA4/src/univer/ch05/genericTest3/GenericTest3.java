package univer.ch05.genericTest3;

class Data3<T> {
    private T t;

    // 교수님 실수 인듯. 필요 없어보임
//    public Data3(T t) {
//        this.t = t;
//    }

    public void set3(T t) {
        this.t = t;
    }

    public T get3() {
        return t;
    }
}

public class GenericTest3 {
    public static void main(String[] args) {
        Data3<String> data = new Data3<>();
        String s1 = new String("hello");
        System.out.println("s1 : " + s1);
        data.set3(s1);
        String s2 = data.get3();
        System.out.println("s2 : " + s2);
    }
}
