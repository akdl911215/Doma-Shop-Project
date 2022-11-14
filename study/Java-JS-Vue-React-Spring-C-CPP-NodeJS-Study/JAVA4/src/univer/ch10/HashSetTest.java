package univer.ch10;

import java.util.HashSet;
import java.util.Set;

public class HashSetTest {
    public static void main(String[] args) {
        Set<String> set = new HashSet<String>();

        set.add("one");
        set.add("two");
        set.add("three");
        set.add("four");
        System.out.println(set.add("one")); // false
        System.out.println(set.add(new String("one"))); // false

        System.out.println(set.size()); // 4
        // contains() : 입력된 자료인지 확인. 입력된 자료면 true, 그렇지 않으면 false
        System.out.println(set.contains("four")); // true
        System.out.println(set.contains("one")); // true
        System.out.println(set.contains(new String("one"))); // true

        set.remove("four");
        set.remove(new String("one"));
        System.out.println(set.size()); // 2

        set.clear();
        System.out.println(set.size()); // 0

    }
}
