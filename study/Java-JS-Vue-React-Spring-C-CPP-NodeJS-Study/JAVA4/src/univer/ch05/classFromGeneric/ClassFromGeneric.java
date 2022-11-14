package univer.ch05.classFromGeneric;

// 제네릭 인터페이스 implements
interface Pair <K, V> {
    public K getKey();
    public V getValue();
}

class MyPair implements Pair <String, Integer> {
    private String key;
    private Integer value;

    public MyPair(String key, Integer value) {
        this.key = key;
        this.value = value;
    }

    @Override
    public String getKey() {
        return key;
    }

    @Override
    public Integer getValue() {
        return value;
    }
}

// 제네릭 클래스 상복받는 일반 클래스
class Data<T> {
    private T t;
    public Data(T t){
        this.t = t;
    }
    public void set(T t) {
        this.t = t;
    }
    public T get() {
        return t;
    }
}

class MyData extends Data<Integer> {

    public MyData(Integer integer) {
        super(integer);
    }
}


public class ClassFromGeneric {
    public static void main(String[] args) {
        MyPair mp = new MyPair("test", 1);
        System.out.println(mp.getKey());
        System.out.println(mp.getValue());

        System.out.println("------------------------");

        MyData md = new MyData(10);
        System.out.println(md.get());
    }
}
