package Ninth;
/*
1) MyDice > 54번줄 >

        while (octahedronGame) {
            octahedronDice = (int) (Math.random() * 8) + 1;
            cnt++;

            if(cnt == 3) {
             cnt = 0;
            break;
        }

            System.out.printf("%d번 사용자, %d번째 시도, 주사위 눈금 = %d\n",i, cnt, octahedronDice);
            // 의문점 : cnt++가 prontf에서 처음에 ++ 해서 1로 출력되서 0번째 사용자 1번째시도 주사위눈금
            // n값으로 출력될듯한데 그렇면 cnt==3일때 0으로 변환되서 끝나기때문에 cnt는 두번 도는게 아닌가요??



        2) MyDice > 68~73줄
        if (cnt == 1 && octahedronDice % 2 == 0) {      // 처음던지면서 octahedronDice가 짝수일때 작동
            octahedronGame = false;            // octahedronGame가 false이므로 더이상 작동하지 않는다.
            cnt = 0;                                  // 0으로 초기화한다
        } else if(cnt == 2 && octahedronDice % 2 == 0) {        //처음던졌을때 octahedronDice가 홀수라면 주사위
                                                                // 한번더 던지게되는데 octahedronDice 짝수라면 스위차 작동한다.
            switch (octahedronDice) {
        // 의문점 : 제가 주석단대로 돌아가는게 맞나요???



        3)MyDice > 68 ~ 78줄
            if (cnt == 1 && octahedronDice % 2 == 0) {
            octahedronGame = false;
            cnt = 0;
        } else if(cnt == 2 && octahedronDice % 2 == 0) {
             switch (octahedronDice) { // 2: 이미 주사위를 얻은 사람의 주사위 값을 3 파괴한다.
            case 2:                                         // 주사위가 2일때 실행
            for(int j = i - 1; j >= 0; j--) {         // i는 어디꺼를? 아마도 28~33에 있는 int i로 생각이됨
                                                      // 처음돌때 int j = -1; j >= 0 성립안된다. j-- ? 이해안됨..
         sumOfDice[j] -= 3;                 // 3을 뺀다
        }
        break
        // 의문점 : 위의 코드가 이해가 잘안됩니다. case 6도 동일하게 이해안됩니다(비슷한 코드입니다)


        4)
        public void insertSort() {
            int i, j, numKey, playerNoKey, len = sumOfDice.length;
            for(i = 1; i < len; i++) {
            numKey = sumOfDice[i];
            playerNoKey = playerArr[i];

            // (j != -1) 은 sumOfDice[-1] 에 의해 배열 인덱스 오류를 방지하기 위해 도입
        for(j = i - 1; (j != -1) && (sumOfDice[j] > numKey); j--) {   // 잘이해가 안됨.
            sumOfDice[j + 1] = sumOfDice[j];                            // j는 어디에서?
            playerArr[j + 1] = playerArr[j];
        }

        sumOfDice[j + 1] = numKey;
        playerArr[j + 1] = playerNoKey;

        // 의문점 : insertSort라는 알고리즘을 사용해서 피보나치수열할때
        res = first + second;
        first = second;
        second = res;
        처럼 res를 이용해서 first와 second의 값을 옮겨준것과 같은 이치라고 정도로 이해했습니다.



        5) RockPaperScissors  / 23 ~ 31줄
        RockPaperScissors(boolean duel) {
            scan = new Scanner(System.in);
            if(duel != true) { //duel 0일때 작동. 0일때 작동이면 1일때도 작동???
            System.out.println("결투 모드입니다. 다음부턴 true 설정을 해주세요!");
        }
            this.duel = true; // 듀얼은 1이 된다.

            System.out.printf("결투 모드입니다.\n");
        }
        // 의문점 : 듀얼이 1이여도 작동 0이여도 작동된다고 이해가되는데 그럼 필요한 이유가 있나요???



        6) AllocRandom / 24 ~ 29줄
        public AllocRandom() {
            numOfRandom = (int)(Math.random() * RANGEARR) + BIASARR; //랜덤값을 numOfRandom 에 대입

            randArr = new int[numOfRandom]; // numOfRandom배열값을 randArr대입
            idxArr = new int[numOfRandom];   // numOfRandom배열값을 idxArr대입
        // 의문점 : numOfRandom배열값을 대입한다는게
        // 예를들면 10이 나왔을 경우 10을 대입하는건지? 10의 배열자릿수를 대입하는건가요???
        }





        7)
        public void deleteRandomNumberValue() {
            randPick = (int)(Math.random() * numOfRandom); // randPick의 동작은  (int)(Math.random() * numOfRandom) 이므로 numOfRandom) 보다
                                                           // 숫자 한개적은게 출력된다.
        System.out.println("지워진 값 = " + randArr[randPick]);  // 예를들어 numOfRandom) = 10이출력되면 randArr[randPick]은 9번째 배열을
                                                                // 표시한다.
        randArr[randPick] = -1;     // 9번째 자리에 -1을 먹여서 없어진것처럼 표시된다.
        }

// 위의 해설이 맞았을 경우 의문점 :

        10    20     30    40    50    - 에서 30[2번배열]이 지워질경우
        [0]   [1]    [2]   [3]   [4]

        10  20     40    50            - 옆에처럼 2번배열이 지워지면서 3 > 2로 4 >3으로 변환?
        [0]  [1]   [2]   [3]

        10   20           40    50     - 아니면 배열은 눈에 보이지 않기때문에 배열은 그대로 유지되지만 중간만 비게 되는건지?
        [0]  [1]          [3]   [4]

        10   20     40    50          - 아니면 배열은 그대로 유지되면서 위치를 변경하는건지???
        [0]  [1]   [3]   [4]



        8) 이질문은 풀이에없는 질문입니다.
        코드를 작성하다보면 배열의 크기가 부족하다는 에러가 발생할때가 종종 있습니다.
        그럴경우 제가 줬던 배열의 + 1을 주니깐 해결이 되었습니다.
        그런데 이 부분이 이해가 안되고 그렇게 실행만 된다는걸 알아서 질문드립니다.

        ex)
        final FIXNUM = 100;
        int []arr = new int[FIXNUM]
        for(int i = 0; i < FIXNUM; i++){

        }
        이런식으로 코드를 형태를 보였던거 같은 위의 질문 에러가 발생합니다.

        그래서
        final FIXNUM = 100;
        int []arr = new int[FIXNUM + 1]
        for(int i = 0; i < FIXNUM; i++){

        }
        이런식으로 고치면 해결되는데 그 이유는 전혀 이해가 안됩니다.
        해당하는 코드를 찾지못해 예를 들었습니다. ㅠ


 */