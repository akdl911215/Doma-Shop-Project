package Thirteenth;

import java.util.ArrayList;
import java.util.Iterator;


public class InteratorTest {
    // ArrayList<>:
    // 이 녀석은 다양한 데이터 타입을 수용할 수 있게 해준다.
    // <String> 문자열, <Integer> 정수, <Float> float 타입 등등
    public static void main(String[] args) {
        ArrayList<String> list = new ArrayList<String>();
        ArrayList<Integer> list2 = new ArrayList<Integer>();


        list.add("one");
        list.add("tow");
        list.add("three");
        list.add("four");
        list.add("five");

        String s;
        // ArrayList 를 순회할 수 있는 정보를 획득함
        Iterator e = list.iterator();

        // e 를 통해 순회할 수 있는 정보가 있다면
        while(e.hasNext()) {
            // 해당 위치의 정보를 에 저장하세요.
            s = (String) e.next();
            System.out.println(s);
        }
    }
}
