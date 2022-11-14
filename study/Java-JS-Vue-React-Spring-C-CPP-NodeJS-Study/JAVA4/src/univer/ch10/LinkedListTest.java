package univer.ch10;

import java.util.LinkedList;
import java.util.List;

public class LinkedListTest {
    public static void main(String[] args) {
        List<String> list = new LinkedList<String>();

        list.add("one");
        list.add("two");
        list.add("three");
        list.add(1, "one");
        list.add("five");

        System.out.println(list.size()); // 5
        System.out.println(list.indexOf("one")); // 0
        System.out.println(list.get(2)); // two
        System.out.println(list.lastIndexOf("one")); // 1
        System.out.println(list.set(3, "four")); // three
        System.out.println(list.remove(4)); // five
        System.out.println(list.remove("one")); // true
    }
}
