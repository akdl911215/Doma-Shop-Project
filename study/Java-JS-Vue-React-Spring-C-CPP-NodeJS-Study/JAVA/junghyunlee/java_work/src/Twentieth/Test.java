package Twentieth;

import java.util.*;

public class Test {

    int[] num = new int[200];
    private static Integer[] totalNum;

        public static void main(String[] args) {
            ArrayList<Integer> list = new <Integer>ArrayList();

            for(int i = 0; i < list.size(); i++) {
                list.add((int)(Math.random() * 40) + 20);

                for(int totalNum : list);
                System.out.println(totalNum);

                HashMap<Integer, Integer> map = new HashMap<>();
                for (Integer a : totalNum) map.put(a, map.getOrDefault(a, 0) + 1);
                System.out.println(map);
            }
        }
    }
