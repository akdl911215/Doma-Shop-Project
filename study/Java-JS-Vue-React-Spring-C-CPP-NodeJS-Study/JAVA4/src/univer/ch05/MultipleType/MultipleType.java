package univer.ch05.MultipleType;

interface Pair<K, V> {
    public K getKey();
    public V getValue();
}

class OrderedPair <K, V> implements Pair<K, V> {

    private K key;
    private V value;

    public OrderedPair(K key, V value) {
        this.key = key;
        this.value = value;
    }

    @Override
    public K getKey() {
        return key;
    }

    @Override
    public V getValue() {
        return value;
    }
}

public class MultipleType {
    public static void main(String[] args) {
        Pair<String, Integer> p1;
        p1 = new OrderedPair<>("Even", 8);

        Pair<String, String> p2;
        p2 = new OrderedPair<>("hello", "java");

        System.out.println("p1.getKey() : " + p1.getKey());
        System.out.println("p1.getValue() : " + p1.getValue());
        System.out.println("p2.getValue() : " + p2.getValue());
        System.out.println("p2.getValue() : " + p2.getValue());
    }
}
