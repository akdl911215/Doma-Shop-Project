package Thirteenth;

// 17명의 사람이 있다. 17명을 임의로 1 ~ 4 팀으로
// 나눌것이다.
// 1 팀 : 4 명
// 2 팀 : 4 명
// 3 팀 : 4 명
// 4 팀 : 5 명 으로 나눠야 한다.
// 팀을 나누는건 랜덤하게 나눠져야 한다.

// 1번. 17명에게 임의의 배열 번호를 부여한다.
// 2번. 17명에게 0 ~ 16 번의 랜덤숫자를 부여한다
// 3번. 부여받은 숫자를 기준으로 4 / 4 / 4 / 5 를 나눈다.

import java.util.ArrayList;
import java.util.Iterator;

class RadomTeamSelection {
    private int teamMember;
    private int randomTeam;
    private int teamFixnum, memberFixnum;
    private int numOfTeam;
    private int numOfTeamMember;
    private int i = 0;
    private int randNum;
    private int choiceMember;


    private int[] teamNuberArr;
    private int[] teamMemberArr;
    private int[] checkDup;


    //private ArrayList<Integer> teamAllayList;
    //private ArrayList<Integer> memberAllayList;


    public RadomTeamSelection(int numOfTeamMember) {

        // 전체팀원의 숫자와 팀 갯수의 값을 조절하기 퍈하게 하기 위해
        //teamFixnum = numOfTeam;
        memberFixnum = numOfTeamMember;

        //this.numOfTeam = numOfTeam;
        this.numOfTeamMember = numOfTeamMember;

        // 1차열 배열 17개 배열을 생성
        teamMemberArr = new int[memberFixnum];

        // 4개 팀을 정보를 받기 위해 만든다? 선언한다?
        //teamAllayList = new ArrayList<Integer>();
        // 17 명의 정수를 받기 위해 만든다? 선언한다?
        //memberAllayList = new ArrayList<Integer>();
    }


    // checkDup 배열에 0 ~ 16 까지의 정수를 0으로 셋팅
    // checkDup[0] = 0
    // checkDup[1] = 0
    // ...
    // checkDup[16] = 0
    public void allocArrTeamMemberZeroValue() {
        checkDup = new int[memberFixnum];

        while (i < checkDup.length) {
            checkDup[i] = 0;
            System.out.printf("checkDup[%d] = %d\n", i, checkDup[i]);
            i++;
        }

    }

    // 해당 배열에 value값을 넣어주자
    public void allocArrTeamChoice() {

        boolean choiceDup = false;
        int randNum;
        // checkDup[i] 배열의 모든 값은 0이다
        // 그럼 choiceMember에게 값을 넘겨주면 0을 할당하게 된다.
        choiceMember = checkDup[i];
        // choiceDup 을 false 로 설정한다.

        do {
                // 랜덤 번호 할당한다.
                // randNum 에 랜덤번호를 할당해준다.
                randNum = (int) (Math.random() * memberFixnum) + 1;

                //System.out.println(randNum);
                //System.out.println("----------------------------");

                // checkDup[i - 1] 배열안의 값이 0이 아닐때 while문으로 인해
                // 다시 반복한다. else 문에서 checkDup[i - 1] 안의 값에다가
                // 0 이 아닌 수를 할당하기 위해서다.

                if (teamMemberArr[randNum -1] != 0) {
                    System.out.println( teamMemberArr[choiceMember] );
                    choiceDup = true;
                } else {
                    choiceDup = false;
                    //teamMemberArr[randNum - 1] = checkDup;
                    System.out.printf("checkDup[%d] = %3\n", checkDup[i - 1], randNum);

            }
        } while (choiceDup);
    }


    public void printRandomTeamArr() {
        int cnt = 1;

        // 입력받은 배열의 길만큼 반복한다.
        for(int i = 0; i < checkDup.length; i++) {
            // 입력되는 배열자리의 + 1 값만큼 표시한다.
            System.out.printf("%3d", checkDup[i] );

            if (cnt % 5 == 0) {
                System.out.println("");
            }

            cnt++;
        }
    }
}
















    /*
    // 입력받은 numOfTeamMember 값을 기준으로 해당하는 1차열 배열을 생성
    // ex ) 17명이니 numOfTeamMember 값에 17을 넣으면
    // arr[ 0 ~ 16 ] 생성
    // 해당 배열에 저장되어있는 value 값을 사람으로 생각해도 된다.
    // 그렇기 때문에 17개의 배열을 생성해서 값을 넣는다.
    // 1번 이정현 2번 오무개 ..... 17번 아무개 다
    // 즉, 해당 배열자리에 값을 넣기 위해 만든것이다
    // arr[0] = 7 , arr[1] = 16 , arr[2] = 0 ..... 이런식
    public int allocArrTeamMemberRandomNumber(int numOfTeamMember) {
        boolean isDup = false;
        int memberRandNum;

        // 0 ~ 16 사이의 배열에 임의로 생성하고
        // 생성된 숫자를 해당번호를 넣어준
        do {
            memberRandNum = (int) (Math.random() * memberFixnum);

            if (teamMemberArr[memberRandNum] != 0) {
                isDup = true;
            } else {
                isDup = false;
                teamMemberArr[memberRandNum] = numOfTeamMember;
            }

        } while(isDup);

        return memberRandNum;
    }


    // arr 사용
    // 17 개의 임의의 정수를 만들자.
    // 배열의 들어갈 value값을 생성하자.
    public void allocArrTeamMemberNumberVlaue(int memberRandNum) {
        boolean isDup = false;
        int randNum = memberRandNum;
        int memberValue;
        int randNumVaule;

        do {
            randNumVaule = (int) (Math.random() * memberFixnum) + 1;

            // teamMemberArr[randNum] = n
            // 즉 n 값에 임의의 숫자를 넣고 그 숫자가 중복되지
            // 않아야 한다.
            memberValue = randNum;
            teamMemberArr[memberValue] = randNumVaule;

            if (teamMemberArr[memberValue] == 0) {
                isDup = true;
            } else {
                isDup = false;
            }
        } while (isDup);

    }
    */
/*
        public void printMemberArr () {


            for (int i = 0; i < teamMemberArr.length; i++) {
                System.out.printf("%3d", teamMemberArr[i]);

                if (i % 5 == 0) {
                    System.out.println("");

                }
                cnt++;
            }
        }
    /*

  /*

    // AllayList 사용
    // 17명의 사람들에게 임의의 정수 0 ~ 16 까지 할당하자
    public int allocTeamMemberNumber() {
        boolean isDup = false;
        int randNum;


            do {
                randNum = (int) (Math.random() * teamFixnum);

                if (memberAllayList.contains(randNum)) {
                    // memberAllayList 에 랜덤으로 만들어진 randNum 값이
                    // 포함 되있으면 true 이기 때문에 while 로 가서
                    // 포함 안될때까지 무한루프
                    isDup = true;
                } else {
                    // memberAllayList 에 랜덤으로 만들어진 randNum 값이
                    // 포함 되어있지 않으면 isDup은 false 값이 들어감으로
                    // 빠져나온다.
                    isDup = false;
                    // false 면 memberAllayList 값 안에 해당 랜덤값이 없으므로
                    // memberAllayList.add(randNum); 으로 randNum 에 다가
                    // 값을 추가해준다.
                    memberAllayList.add(randNum);
                }
            } while (isDup);
            return randNum;
    }
    */

/*
    // allocTeamMemberNumber 가 0 ~ 16까지 랜덤하게
    // 할당됬는지 확인하는 print
    public void printTeamMemberNumber(){

        //int cnt = 1;

        Integer MemberNum;
        Iterator e = memberAllayList.iterator();


        while(e.hasNext()) {
            MemberNum = (Integer) e.next();
            System.out.printf("%3d", MemberNum);

            //if (cnt % 5 == 0) {
            //   System.out.println("");
            //}

            //cnt++;

        }
    }
*/
    // 임의로 부여된 숫자의 값을 저장하자.
    // 값을 어떤식으로 저장할까? 단순한 더하기는 안된다.
    // 임의의 변수에 += 하면 총 합이 나올뿐이다.
    // 그렇다면 해당 배열의 자리에 넣어줘야한다.

      /*

        public void saveTeamMemberNuber(){

    }


    // 17명을 a ~ d 팀 또는 1 ~ 4 팀 처럼 나눠서 넣어주자
    // 나눠서 넣어줄려면 어떻게 해야할까?

    // 17명에게 랜덤한 숫자를 넘겨줬으니 17 % 4 == 0 로 나누면
    // 4개의 팀으로 나눠질 것이다.
    // 0 ~ 4      = 5명
    // 5 ~ 8      = 4명
    // 9 ~ 12     = 4명
    // 13 ~ 16    = 4명
    public void divisonTeamMember() {
        if(memberFixnum % teamFixnum == 0) {

        }
    }

}

*/