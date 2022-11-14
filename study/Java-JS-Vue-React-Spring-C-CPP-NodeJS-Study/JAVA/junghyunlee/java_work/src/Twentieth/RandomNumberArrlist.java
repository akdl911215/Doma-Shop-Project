package Twentieth;

import java.util.ArrayList;
import java.util.HashMap;

public class RandomNumberArrlist {

    public void printRandomNum(){
        ArrayList<Integer> list = new <Integer>ArrayList();

        for(int i = 0; i < 200; i++) {

            list.add((int) (Math.random() * 40) + 20);

                for(int totalNum : list);

        }


        System.out.println("리스트 값 = " + list);
        HashMap<Integer, Integer> map = new HashMap<>();
            for (Integer a : list) map.put(a, map.getOrDefault(a, 0) + 1);
        System.out.println("출력 결과 : " + map);
    }
}
