package univer.ch05.generic;

import java.util.ArrayList;
import java.util.List;

public class GenericTest {
    public static void main(String[] args) {
        List list = new ArrayList();
        list.add("java");
        String s = (String) list.get(0);
        System.out.println(s);

        List<String> list2 = new ArrayList<String>();
        list2.add("JavaScript");
        String s2 = list2.get(0);
        System.out.println(s2);
    }
}
