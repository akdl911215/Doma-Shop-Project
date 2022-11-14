package FirstTest;

public class arrRandomNum {
    private int[] arr;
    private int randNum;
    private int numZreo = 0;
    private int numOne = 1;
    private int numTen = 10;
    private int numberOne;
    private int numberTwo;
    private int num;
    private int num2;
    private int i;
    private int j;
    private int k;
    private int randomArrdice;
    private int tmp;
    private int choiceNumber;

    public arrRandomNum(){
        this.i = i;
        this.j = j;
        this.k = k;
        this.tmp = tmp;
        this.numberOne = numberOne;
        this.numberTwo = numberTwo;
        this.choiceNumber = choiceNumber;

    }

    public void printArrRandomNum() {
        randNum = (int) (Math.random() * numTen) + numOne;
        arr = new int[randNum];
        System.out.println("생성된 배열의 갯수 = " + randNum);
        System.out.println("");

        for (int i = numZreo; i < randNum; i++) {
            arr[i] = (int) (Math.random() * randNum) + numOne;
            System.out.printf("arr[%d] = %d\n", i, arr[i]);
        }
    }

    public void printArrRandomNum(int numberOne, int numberTwo) {

        System.out.println("시작 값 = " + numberOne + " 끝 값 = " + numberTwo);

        randNum = (int) (Math.random() * numberTwo) + numOne;
        arr = new int[randNum];
        System.out.println("생성된 배열의 갯수 = " + randNum);
        System.out.println("");

        for (int i = numZreo; i < randNum; i++) {
            arr[i] = (int) (Math.random() * numberTwo) + numOne;
            System.out.printf("arr[%d] = %d\n", i, arr[i]);
        }
    }

    public void printArrRandomNum(int numberOne, int numberTwo,
                                         int choiceNumber) {

        System.out.println("시작 값 = " + numberOne + " 끝 값 = " + numberTwo);
        System.out.println("");

        if(choiceNumber == 0) {
            System.out.printf("현재 선택한 출력값은 짝수입니다.\n");
        } else {
            System.out.printf("현재 선택한 출력값은 홀수입니다.\n");
        }
        System.out.println("");

        randNum = (int) (Math.random() * numberTwo) + numOne;
        arr = new int[randNum];
        System.out.println("생성된 배열의 갯수 = " + randNum);
        System.out.println("");

        for (int i = numZreo; i < randNum; i++) {
            arr[i] = (int) (Math.random() * numberTwo) + numOne;
            //System.out.printf("arr[%d] = %d\n", i, arr[i]);

            int totalNum = arr[i];
            if(totalNum % 2 == choiceNumber) {
                System.out.printf("arr[%d] = %d\n", i, arr[i]);
            }

        }
    }

    public void printArrRandomNumSort(int numberOne, int numberTwo) {

        System.out.println("시작 값 = " + numberOne + " 끝 값 = " + numberTwo);

        // 랜덤으로 만들어진 값을 randNum 에 할당
        // 랜덤 배열을 만들기 위한것
        randNum = (int) (Math.random() * numberTwo) + numOne;
        // randNum 출력
        System.out.println("randNum = " + randNum);
        // randNum값만큼의 배열을 생성 그리고 arr 에 할당
        arr = new int[randNum];
        System.out.println("arr배열의 길이는 = " + arr.length);
        System.out.println("생성된 배열의 갯수 = " + randNum);
        System.out.println("");

        // 각 배열의 값에게 랜덤값을 주기 위한 것
        for (k = numZreo; k < randNum; k++) {
            arr[k] = (int) (Math.random() * numberTwo) + numOne;
            System.out.printf("arr[%d] = %d\n", k, arr[k]);
        }

        int tmp;
        // 출력해보니 0번 배열이 출력된다
        // 왜지? 배열의 길이가 6일때 5번배열이 출력되야할듯한데?
        System.out.printf("**arr[%d] = %d\n", k, arr[k]);
        System.out.println("arr배열의 길이는2 = " + arr.length);
        // 랜덤값이 10이라면 10번의 반복을한다
/*
        for (int x = numOne; x <= arr.length; x++) {
            for (int z = x; z > numZreo; z--) {
                if (arr[i - numOne] > arr[i]) {
                    tmp = arr[i - numOne];
                    arr[i - numOne] = arr[i];
                    arr[i] = tmp;
                }
            }
        }
*/

    }

}

