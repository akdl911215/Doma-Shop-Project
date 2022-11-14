package univer.ch10;

import java.util.LinkedList;

public class QueueTest {
    public static void main(String[] args) {
        LinkedList <String> queue = new LinkedList<String>();

        queue.offer("one");
        queue.offer("two");
        queue.offer("three");
        queue.offer("four");
        queue.offer("five");

        String s = queue.poll();
        while (s != null){
            System.out.println(s);
            s = queue.poll();
        }
    }
}
