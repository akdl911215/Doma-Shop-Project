package Fourteenth;

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

    // 조는 2개이기 때문에 1차열 배열 2개로 입력받는다.
    // TEAMNUMBER = 17명을 입력받는다
    public CreateTeam(String[] arrA, String[] arrB, final int TEAMNUMBER) {
        // a조 b조 배열 값을 저장하기 해놓기 위해 할당한다.
        AteamArr = arrA;
        BteamArr = arrB;

        // 각 numOfPerson 의 각 조의 길이값을 저장한다.
        // 9 , 8명이기 때문에 A 에는 9 / B 에는 8
        AnumOfPerson = arrA.length;
        BnumOfPerson = arrB.length;

        // TEAMNUMBER 값을 할당한다.
        numOfTeam = TEAMNUMBER;

        // teamArrayList 값을 ArrayList의 String 값 으로 할당한다.
        // ArrayList 특성
        // ArrayList는 List 인터페이스를 상속받은 클래스로 크기가 가변적으로 변하는 선형리스트입니다.
        // 일반적인 배열과 같은 순차리스트이며 인덱스로 냅의 객체를 관리한다는점 등이 유사하지만 한번
        // 생성되면 크기가 변하지 않는 배열과는 다릴 ArrayList는 객체들이 추가되어 저장 용량(capacity)을
        // 초과한다면 자동으로 부족한 크기만큼 저장 용량(capacity)이 늘어난다는 특징을 가지고 있습니다.
        AteamArrayList = new ArrayList<String>();
        BteamArrayList = new ArrayList<String>();
    }

    public void allocRandomTeam() {
        // 문제 풀 때 어떤식으로 접근을 해야할까요 ?
        // 1. 우선 이 문제를 풀기 위한 전략을 세워야 한다.
        // 2. 문제가 요구 사항을 파악해야한다.
        // 3. 요구 사항을 하나 하나 각개 격파한다.

        // 위의 방식을 따라서 현재 문제에 대한 요구 사항을 파악해보자!
        // 문제: 우리반 사람들을 4개의 팀으로 랜덤하게 할당한다.
        // 1) 랜덤을 사용해야 한다(Math.random() 혹은 Random 클래스)
        // 2) 우리반 사람들이 몇 명 있는가 ? 17명
        // 2-2) 현재 교차 대면 수업을 하므로
        //      A조, B조가 구별되어 있는 상태다.
        //      A조는 A조 내에서 분할, B조도 B조 내에서 분할
        //      입력 배열이 1개가 아니고 2개의 입력 배열이 필요하다.
        // 2-3) 현재 케이스는 굉장히 특수한 케이스이므로
        //      일반적인 상황에서 배열 1개면 충분할 것이다.
        // 3) 몇 개의 팀으로 구성해야 하는가 ? 4개의 팀
        // 4) 만약 상황이 바뀐다면 n 개의 팀도 가능할까 ? 여기까지 고려하면 좋음
        // 5) 그렇다면 17명을 어떻게 4개의 팀으로 나눌까 ?
        //    17 나누기 4 를 하고 랜덤한 특정 번호에 5명을 배치하게 해볼까 ?
        // 6) 랜덤한 팀원수를 가지는 팀을 분할 했다면
        //    이제 실제 random 값을 추출하여
        //    ArrayList에 정보를 배치한다.
        // 7) 중복이 되면 안되므로 중복을 판정하는 루틴이 추가적으로 필요하다.

        // 프로젝트: ~~을 만들어서 돈을 법시다.
        // *: ~ 을 어떻게 만들까 ?
        // 앞으로 숙제할 때 요구 사항을 분석하는 연습을 해보면 좋을것 같습니다.

        // 1) 배열을 백업 받았으므로 랜덤값을 뽑아서
        //    해당 값을 인덱스로 특정 인물을 추출하여 ArrayList에 설정한다.

        /*
        for(int i = 0; i < AnumOfPerson; i++) {
            int randNum = (int)(Math.random() * AnumOfPerson);
            AteamArrayList.add(AteamArr[randNum]);
        }
        for(int i = 0; i < BnumOfPerson; i++) {
            int randNum = (int)(Math.random() * BnumOfPerson) + AnumOfPerson;
            BteamArrayList.add(BteamArr[randNum]);
        }
         */

        // allocArrayList 를 A, B 팀 두개를 셋팅한다.
        allocArrayList(
                AteamArrayList, AteamArr, AnumOfPerson
        );
        allocArrayList(
                BteamArrayList, BteamArr, BnumOfPerson
        );
    }

    // 입력 값은 위의 allocArrayList 2개 케이스를 순서대로 입력받는다.
    // 아마 A팀이
    // allocArrayList(
    //    AteamArrayList, AteamArr, AnumOfPerson
    //        ); 정보가 위에 있기때문에 먼저 처리가 될듯하다.
    public void allocArrayList(ArrayList<String> al, String[] arr, int loopNum) {

        // is Dup을 false로 셋팅한다.
        boolean isNotDup = true;

        for(int i = 0; i < loopNum; i++) {
            // 우리는 A 배열, B 배열이 나눠진 케이스를 받으므로
            // 하나의 배열에서 모든 값을 처리하지 않는다.
            // 그러므로 start를 별도로 만들 필요가 없었다.
            // int randNum = (int)(Math.random() * loopNum) + start;
            while(isNotDup){
                // randNum 에는 각 팀의 숫자의 랜덤값을 할당해줄 수 있다.
                // ex) A팀의 경우 loopNum이 AnumOfPerson이 할당되기 때문에
                // 0 ~ 8까지 9가지의 값을 할당해줄 수 있다.
                int randNum = (int)(Math.random() * loopNum);

                // ArrayList<String> al 안에 arr[randNum] 특정 문자열이 포함
                // 되어 있는지 확인하는 함수이다. 그러므로 랜덤으로 뽑힌 배열안에
                // al이 포함되어 있으면 if문 실행 아니면 else 실행하게 된다.
                if(al.contains(arr[randNum])) {
                    isNotDup = true;

                    // do ~ while 문은 기본적으로 한번 실행하고 while로 true이면
                    // 실행하고 false이면 실행하지 않는다. 그러면 continue가
                    // 왜 있을까? continue가 있을때와 주석했을때 의 결과차이가 발생했다.
                    // continue가 있는이유는 밑에 있는 al.add(arr[randNum]);이
                    // 실행되지 않도록 하기위해서 제대로된 값을 출력해주기 위한 보정이 목적인듯 하다.
                    continue;
                } else {
                    isNotDup = false;
                }

                al.add(arr[randNum]);
                // 그래서 do ~ while문은 필요없을것 같았지만, 실제로 결과값이
                // 다르게 나오게 된다. do는 1회를 무조건 반복하고 while에서 결과에 따라
                // 반복을 시작하는 것인데... continue가 있으니 반복을 하게 되니 사실상
                // do ~ while문은 필요가 없는것이 아닐까???
            }
        }
    }

    // printArrayList는 A팀이 4, 5 또는 5, 4 이냐를 결정하기 위하기 때문에
    // 1회만 사용된다.
    public void printArrayList(ArrayList<String> al) {
        String name;
        // ticketArrayList를 순회할 수 있는 정보를 얻음
        // Iterator는 자바의 컬렉션 프레임워크에서 컬렉션에 저장되어 있는
        // 요소들을 읽어오는 방법을 표준화한 것이다.
        // 그러므로 al.iterator 에 해당하는 리스트배열 ( A or B )
        // 값을 순회하면서 Iterator e 정보를 얻는다
        Iterator e = al.iterator();

        int cnt = 1;
        int divNum;
        // al.size()는 al의 총사이즈를 가지고 오는거 같습니다.
        // 하지만, al의 사이즈가 a팀의 경우라 가정하였을 때, 밸류값이 9개라서 9가
        // 되는건지 al의 배열사이즈가 9이기때문에 9가되는지 헷갈립니다.
        int quot = al.size() / numOfTeam;
        int remain = al.size() % numOfTeam;

        // al로 넘어온 al의 사이즈가 numOfTeam로 나눴을 경우
        // 0 보다 큰가? 를 참과 거짓으로 구별하라
        boolean needException =
                (remain > 0) ? true : false;

        int randValue = 0;
        // 현재 발생하는 문제
        // 1) 매 반복마다 randValue가 0, 1, 0, 1 스위칭되고 있음

        // 순회할 수 있는가 ?
        // 데이터가 없으면 루프 진행 x
        // 데이터가 하나라도 있으면 루프 진행 o

        // e.hasNext 사용이유 :
        // Iterator 개체는 컬렉션 개체의 iterator 메서드를 호출하여
        // 얻어올 수 있습니다. 그리고 hasNext 메서드로 이동이 가능한지
        // 확인한 후에 next 메서드로 해당 위치의 보관한 개체를 참조하여
        // 원하는 작업을 수행한다고 합니다.

        // 그럼으로 Iterator e = al.iterator(); 에서 얻어온 정보들을
        // e.hasNext 메소드로 이동이 가능한지를 확인한 후에 이동할 수 있다면
        // while문은 실행하게 됩니다. 그리고 while문이 실행된다는 것은
        // 곧 Iterator e 의 모든 값들을 할당받은 것입니다.
        while(e.hasNext()) {
            // e.next() 에 들어가있는 해당값들을 전부 name 에 할당한다.
            name = (String) e.next();
            System.out.printf("%s ", name);

            // 현재 케이스에서는 무조건 앞에 5명이 나온다.
            // 그러므로 이것도 랜덤하게 4, 5 혹은 5, 4가 나오게 해줘야 한다.

            // needException은 A조에서 4, 5 혹은 5, 4 로 랜덤으로 선택하기
            // 위해서 만들었기 때문에 0 ~ 1 값 한번만 출력하기 하고나서
            // needException을 false 로 만든다.
            if(needException) {
                randValue = (int)(Math.random() * 2);
                needException = false;
            }

            /*
            System.out.printf("cnt = %d, quot + randValue = %d\n",
                    cnt, quot + randValue);
             */


            // 밑에 if 문은 항상 실행된다. 다만, randValue 값이 0 이나오면
            // (quot + randValue) = 4값이 되고 cnt 가 4가 됬을 경우
            // 나머지가 0이되서 A 팀이 4명이 되고, randValue 값이 1 나올 경우에는
            // (quot + randValue) = 5값이 되서 A 팀이 5가 된다.
            if((cnt % (quot + randValue)) == 0) {
                System.out.println("");

                // if 는 A 팀이 4명이 될경우 실행
                if(cnt == 4) {
                    randValue = 1;
                    // else 는 A 팀이 5명이 될경우 실행
                } else {
                    randValue = 0;
                }

                cnt = 0;
            }

            cnt++;
        }

        System.out.println("");
    }

    public ArrayList<String> getAteamArrayList() {
        return AteamArrayList;
    }

    public ArrayList<String> getBteamArrayList() {
        return BteamArrayList;
    }
}