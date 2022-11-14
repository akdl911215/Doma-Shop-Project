package univer.ch05.MultipleType2;


interface Pair2<K, V> {
    public K getKey2();
    public V getValue2();
}

class OrderedPair2 <K, V> implements Pair2<K, V> {

    private K key;
    private V value;

    public OrderedPair2(K key, V value) {
        this.key = key;
        this.value = value;
    }

    @Override
    public K getKey2() {
        return key;
    }

    @Override
    public V getValue2() {
        return value;
    }
}

class Data2<T> {

    private T t;

    public Data2(T t) {
        this.t = t;
    }

    public void set(T t) {
        this.t = t;
    }
    public T get() {
        return t;
    }
}

public class MultipleType2 {
    public static void main(String[] args) {
        Pair2<String, Data2<Integer>> p1;
        p1 = new OrderedPair2<>("Even", new Data2<>(8));

        System.out.println("p1.getKey() : " + p1.getKey2());
        System.out.println("p1.getValue() : " + p1.getValue2().get());

    }
}
