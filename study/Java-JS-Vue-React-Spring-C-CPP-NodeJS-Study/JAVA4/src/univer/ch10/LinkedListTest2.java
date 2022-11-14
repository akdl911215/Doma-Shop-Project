package univer.ch10;

import java.util.Iterator;
import java.util.LinkedList;
import java.util.List;

public class LinkedListTest2 {
    public static void main(String[] args) {
        List <String> list = new LinkedList<String>();

        list.add("one");
        list.add("two");
        list.add("three");
        list.add("four");
        list.add("five");

        // for 구문을 이용한 자료 탐색
        for (int i = 0; i < list.size(); ++i)
            System.out.println(list.get((i)));

        // foreach 구문을 이용한 자료 탐색
        for (String s : list)
            System.out.println(s);

        // Iterator 인터페이스를 이용한 자료 탐색
        Iterator<String> it = list.iterator();
        while(it.hasNext())  // hasNext() : 읽어올 요소가 남아있는지 확인하는 메서드, 요소가 있으면 true, 없으면 false
            System.out.println(it.next()); // next() : 다음 데이터를 반환
    }
}
