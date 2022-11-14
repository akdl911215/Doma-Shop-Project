package com.example.demo.homework;

import java.util.ArrayList;
import java.util.Iterator;

public class CreateTeam {
    private ArrayList<String> AteamArrayList;
    private ArrayList<String> BteamArrayList;
    private String[] AteamArr;
    private String[] BteamArr;
    private int AnumOfPerson;
    private int numOfTeam;
    private int BnumOfPerson;
    public CreateTeam(String[] arrA, String[] arrB, final int TEAMNUMBER) {
        AteamArr = arrA;
        BteamArr = arrB;
        AnumOfPerson = arrA.length;
        BnumOfPerson = arrB.length;
        numOfTeam = TEAMNUMBER;
        AteamArrayList = new ArrayList<String>();
        BteamArrayList = new ArrayList<String>();
    }

    public void allocRandomTeam() {
        allocArrayList(
                AteamArrayList, AteamArr, AnumOfPerson
        );
        allocArrayList(
                BteamArrayList, BteamArr, BnumOfPerson
        );
    }

    public void allocArrayList(ArrayList<String> al,
                               String[] arr, int loopNum) {
        boolean isDup = false;
        for (int i = 0; i < loopNum; i++) {
            do {
                int randNum = (int) (Math.random() * loopNum);
                if (al.contains(arr[randNum])) {
                    isDup = true;
                    continue;
                } else {
                    isDup = false;
                }
                al.add(arr[randNum]);
            } while (isDup);
        }
    }

    public void printArrayList(ArrayList<String> al) {
        String name;
        Iterator e = al.iterator();
        int cnt = 1;
        int divNum;
        int quot = al.size() / numOfTeam;
        int remain = al.size() % numOfTeam;
        boolean needException = (remain > 0) ? true : false;
        int randValue = 0;
        while (e.hasNext()) {
            name = (String) e.next();
            System.out.printf("%s", name);
            if (needException) {
                randValue = (int) (Math.random() * 2);
                needException = false;
            }
            if ((cnt % (quot + randValue)) == 0) {
                System.out.println(" ");
                if (cnt == 4) {
                    randValue = 1;
                } else {
                    randValue = 0;
                }
                cnt = 0;
            }
            cnt++;
        }
        System.out.println(" ");
    }
    public ArrayList<String> getAteamArrayList() {
        return AteamArrayList;
    }
    public ArrayList<String> getBteamArrayList() {
        return BteamArrayList;
    }
}