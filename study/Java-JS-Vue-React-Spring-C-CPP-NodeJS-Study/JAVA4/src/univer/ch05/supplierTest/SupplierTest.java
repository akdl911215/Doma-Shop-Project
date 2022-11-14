package univer.ch05.supplierTest;

import java.util.function.Supplier;

public class SupplierTest {
    public static void main(String[] args) {
        Supplier<Integer> rand = () -> {
            Integer r = (int)(Math.random() * 10);
            return r;
        };
        int a = rand.get();
        System.out.println(a);
    }
}
