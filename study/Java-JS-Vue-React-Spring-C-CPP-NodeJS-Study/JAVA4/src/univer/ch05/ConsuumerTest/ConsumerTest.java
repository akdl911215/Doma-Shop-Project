package univer.ch05.ConsuumerTest;

import java.util.function.Consumer;

public class ConsumerTest {
    public static void main(String[] args) {
        Consumer<String> con = t -> System.out.println("Hello " + t);
        con.accept("java");
        // Hello java
    }
}
