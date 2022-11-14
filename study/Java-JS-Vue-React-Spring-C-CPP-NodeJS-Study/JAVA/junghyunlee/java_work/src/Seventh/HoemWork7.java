package Seventh;

import java.util.Arrays;

class staffPerson{
    int i;
    int[] staffMember;


    public void randomNumber(int num){
        staffMember = new int[num];

        for(i = 1; i <= num; i++) {
            staffMember[i - 1] = (int)(Math.random() * 20) + 1;
        }
    }



    @Override
    public String toString() {
        return "staffPerson{" +
                "staffMember=" + Arrays.toString(staffMember) +
                '}';
    }

//    public void printNum() {
//        System.out.printf("%번째 staffMember의 랜덤번호 = %d", i, staffMember[i]);
//    }

}

public class HoemWork7 {
    public static void main(String[] args) {
        // 총 20명의 사원이 있다고 가정한다.
        // 20명 모두에게 랜덤한 번호가 할당되도록 만든다(중복 허용)
        staffPerson sta = new staffPerson();
        sta.randomNumber(20);
        //sta.printNum();
        System.out.println(sta);
    }
}
