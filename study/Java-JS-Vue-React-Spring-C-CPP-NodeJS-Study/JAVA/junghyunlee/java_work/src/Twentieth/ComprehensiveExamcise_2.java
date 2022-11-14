package Twentieth;

// 랜덤한 숫자를 200개 생성한다.
// 숫자의 범위는 20 ~ 60 까지로 제한한다.
// 각각의 숫자들이 몇 개ᄊᆔᆨ 중복되었는지 검사하는 프로그램을 작성해보자!
// (컬렉션 문제)

// 200개의 숫자를 중복검사.
// 중복 검사를 할려면?
// 20이 나왔다 치자. 20이 나오면 ?
import java.util.ArrayList;
import java.util.Iterator;

public class ComprehensiveExamcise_2 {
    public static void main(String[] args) {

        int totalNum = 0;
        int totalNumber = 0;
        int totalNuma = 0, totalNumb = 0, totalNumc = 0, totalNumd = 0, totalNumf = 0;
        int totalNume = 0, totalNumg = 0, totalNumh = 0, totalNumaa = 0, totalNumbb = 0;
        int totalNumcc = 0, totalNumdd = 0, totalNumee = 0, totalNumff = 0, totalNumgg = 0;
        int totalNumhh = 0, totalNumi = 0, totalNumii = 0, totalNumj = 0, totalNumjj = 0;
        int totalNumk = 0, totalNumkk = 0, totalNuml = 0, totalNumll = 0, totalNumn = 0;
        int totalNumnn = 0, totalNumm = 0, totalNummm = 0, totalNumo = 0, totalNumoo = 0;
        int totalNump = 0, totalNumpp = 0, totalNumq = 0, totalNumqq = 0, totalNumr = 0;
        int totalNumrr = 0, totalNums = 0, totalNumss = 0, totalNumt = 0, totalNumtt = 0;
        int totalNumu = 0, totalNumuu = 0, totalNumv = 0, totalNumvv = 0, totalNumw = 0;
        int totalNumww = 0, totalNumx = 0, totalNumxx = 0, totalNumy = 0, totalNumyy = 0;
        int totalNumz = 0, totalNumzz = 0, totalNumA = 0, totalNumAA = 0, totalNumB = 0;
        int totalNumBB = 0, totalNumC = 0, totalNumCC = 0, totalNumD = 0, totalNumDD = 0;
        int totalNumE = 0, totalNumEE = 0, totalNumF = 0, totalNumFF = 0, totalNumG = 0;
        int totalNumGG = 0, totalNumH = 0, totalNumHH = 0, totalNumI = 0, totalNumII = 0;
        int totalNumJ = 0, totalNumJJ = 0, totalNumKK = 0, totalNumK = 0, totalNumL = 0;
        int totalNumLL = 0, totalNumN = 0, totalNumNN = 0, totalNumM = 0, totalNumMM = 0;
        int totalNumO = 0, totalNumOO = 0;

        int num = 0;

        for(int i = 0; i < 200; i++) {

            ArrayList<Integer> list = new ArrayList<Integer>();

            num = (int) (Math.random() * 40) + 20;


            list.add(num);

            Integer s;
            // ArrayList 를 순회할 수 있는 정보를 획득함
            Iterator e = list.iterator();

            // e 를 통해 순회할 수 있는 정보가 있다면
            while (e.hasNext()) {
                // 해당 위치의 정보를 에 저장하세요.
                s = (Integer) e.next();
                //System.out.println(s);
            }

            if (num == 20) {
                totalNuma++;
                totalNumaa += totalNuma;
            } else if (num == 21) {
                totalNumb++;
                totalNumbb += totalNumb;
            } else if (num == 22) {
                totalNumc++;
                totalNumcc += totalNumc;
            } else if (num == 23) {
                totalNumd++;
                totalNumdd += totalNumd;
            } else if (num == 24) {
                totalNume++;
                totalNumee += totalNume;
            } else if (num == 25) {
                totalNumf++;
                totalNumff = totalNumf;
            } else if (num == 26) {
                totalNumg++;
                totalNumgg = totalNumg;
            } else if (num == 27) { ;
                totalNumh++;
                totalNumhh = totalNumh;
            } else if (num == 28) { ;
                totalNumi++;
                totalNumii = totalNumi;
            } else if (num == 29) { ;
                totalNumj++;
                totalNumjj = totalNumj;
            } else if (num == 30) { ;
                totalNumk++;
                totalNumkk = totalNumk;
            } else if (num == 31) { ;
                totalNuml++;
                totalNumll = totalNuml;
            } else if (num == 32) { ;
                totalNumn++;
                totalNumnn = totalNumn;
            } else if (num == 33) { ;
                totalNumm++;
                totalNummm = totalNumm;
            } else if (num == 34) { ;
                totalNumo++;
                totalNumoo = totalNumo;
            } else if (num == 35) { ;
                totalNump++;
                totalNumpp = totalNump;
            } else if (num == 36) { ;
                totalNumq++;
                totalNumqq = totalNumq;
            } else if (num == 37) { ;
                totalNumr++;
                totalNumrr = totalNumr;
            } else if (num == 38) { ;
                totalNums++;
                totalNumss = totalNums;
            } else if (num == 39) { ;
                totalNumt++;
                totalNumtt = totalNumt;
            } else if (num == 40) { ;
                totalNumu++;
                totalNumuu = totalNumu;
            } else if (num == 41) { ;
                totalNumv++;
                totalNumvv = totalNumv;
            } else if (num == 42) { ;
                totalNumw++;
                totalNumww = totalNumw;
            } else if (num == 43) { ;
                totalNumx++;
                totalNumxx = totalNumx;
            } else if (num == 44) { ;
                totalNumy++;
                totalNumyy = totalNumy;
            } else if (num == 45) { ;
                totalNumz++;
                totalNumzz = totalNumz;
            } else if (num == 46) { ;
                totalNumA++;
                totalNumAA = totalNumA;
            } else if (num == 47) { ;
                totalNumB++;
                totalNumBB = totalNumB;
            } else if (num == 48) { ;
                totalNumC++;
                totalNumCC = totalNumC;
            } else if (num == 49) { ;
                totalNumD++;
                totalNumDD = totalNumD;
            } else if (num == 50) { ;
                totalNumE++;
                totalNumEE = totalNumE;
            } else if (num == 51) { ;
                totalNumF++;
                totalNumFF = totalNumF;
            } else if (num == 52) { ;
                totalNumG++;
                totalNumGG = totalNumG;
            } else if (num == 53) { ;
                totalNumH++;
                totalNumHH = totalNumH;
            } else if (num == 54) { ;
                totalNumI++;
                totalNumII = totalNumI;
            } else if (num == 55) { ;
                totalNumJ++;
                totalNumJJ = totalNumJ;
            } else if (num == 56) { ;
                totalNumK++;
                totalNumKK = totalNumK;
            } else if (num == 57) { ;
                totalNumL++;
                totalNumLL = totalNumL;
            } else if (num == 58) { ;
                totalNumN++;
                totalNumNN = totalNumNN;
            } else if (num == 59) { ;
                totalNumM++;
                totalNumMM = totalNumM;
            } else if (num == 60) { ;
                totalNumO++;
                totalNumOO = totalNumO;
            }




        }
        System.out.println("20의 중복 수 = " + totalNumaa);
        System.out.println("21의 중복 수 = " + totalNumbb);
        System.out.println("22의 중복 수 = " + totalNumcc);
        System.out.println("23의 중복 수 = " + totalNumdd);
        System.out.println("24의 중복 수 = " + totalNumee);
        System.out.println("25의 중복 수 = " + totalNumff);
        System.out.println("26의 중복 수 = " + totalNumgg);
        System.out.println("27의 중복 수 = " + totalNumhh);
        System.out.println("28의 중복 수 = " + totalNumii);
        System.out.println("29의 중복 수 = " + totalNumjj);
        System.out.println("30의 중복 수 = " + totalNumkk);
        System.out.println("31의 중복 수 = " + totalNumll);
        System.out.println("32의 중복 수 = " + totalNumnn);
        System.out.println("33의 중복 수 = " + totalNummm);
        System.out.println("34의 중복 수 = " + totalNumoo);
        System.out.println("35의 중복 수 = " + totalNumpp);
        System.out.println("36의 중복 수 = " + totalNumqq);
        System.out.println("37의 중복 수 = " + totalNumrr);
        System.out.println("38의 중복 수 = " + totalNumss);
        System.out.println("39의 중복 수 = " + totalNumtt);
        System.out.println("40의 중복 수 = " + totalNumuu);
        System.out.println("41의 중복 수 = " + totalNumvv);
        System.out.println("42의 중복 수 = " + totalNumww);
        System.out.println("43의 중복 수 = " + totalNumxx);
        System.out.println("44의 중복 수 = " + totalNumyy);
        System.out.println("45의 중복 수 = " + totalNumzz);
        System.out.println("46의 중복 수 = " + totalNumAA);
        System.out.println("47의 중복 수 = " + totalNumBB);
        System.out.println("48의 중복 수 = " + totalNumCC);
        System.out.println("49의 중복 수 = " + totalNumDD);
        System.out.println("50의 중복 수 = " + totalNumEE);
        System.out.println("51의 중복 수 = " + totalNumFF);
        System.out.println("52의 중복 수 = " + totalNumGG);
        System.out.println("53의 중복 수 = " + totalNumHH);
        System.out.println("54의 중복 수 = " + totalNumII);
        System.out.println("55의 중복 수 = " + totalNumJJ);
        System.out.println("56의 중복 수 = " + totalNumKK);
        System.out.println("57의 중복 수 = " + totalNumLL);
        System.out.println("58의 중복 수 = " + totalNumNN);
        System.out.println("59의 중복 수 = " + totalNumMM);
        System.out.println("60의 중복 수 = " + totalNumOO);

    }
}