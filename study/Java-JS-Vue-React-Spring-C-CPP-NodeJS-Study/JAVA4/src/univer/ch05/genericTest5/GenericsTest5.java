package univer.ch05.genericTest5;

class Util {
    public static <K, V> boolean compare(Pair5<K,V> p1, Pair5<K,V> p2) {
        return p1.getKey().equals(p2.getKey()) &&
                p1.getValue().equals(p2.getValue());
    }
}

class Pair5<K,V> {
    private K key;
    private V value;
    public Pair5(K key, V value) {
        this.key = key;
        this.value = value;
    }

    public void setKey(K key) {
        this.key = key;
    }
    public void setValue(V value) {
        this.value = value;
    }
    public K getKey() {
        return key;
    }
    public  V getValue() {
        return value;
    }


}

public class GenericsTest5 {
    public static void main(String[] args) {
        Pair5<Integer, String> p1 = new Pair5<>(1, "Apple");
//        Pair5<Integer, String> p2 = new Pair5<>(2, "Pear"); // 이걸로 하면 false
        Pair5<Integer, String> p2 = new Pair5<>(1, "Apple"); // 이거로 하면 true
        boolean same = Util.<Integer, String> compare(p1, p2);
        System.out.println(same);
    }
}
