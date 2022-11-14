package FirstTest;

public class wareHouse {
    private int spaceWidth;
    private int spaceAlignment;
    private int width;
    private int wasteSpce;
    private int arrNumber;
    private int arr[];
    private int i;
    private int arrChoice;
    private int numZero;

    public wareHouse(){
        this.spaceWidth = spaceWidth;
        this.spaceAlignment = spaceAlignment;
        this.width = width;
        this.arrNumber = arrNumber;
        this.wasteSpce = wasteSpce;
        this.i = i;
        this.arrChoice = arrChoice;
    }

    public void wareHouseSpaceAlignment(int spaceWidth, int spaceAlignment){
        System.out.printf("현재 창고의 공간의 크기는 %d 입니다.\n", spaceWidth);

        width = (spaceWidth / spaceAlignment);
        System.out.printf("현재 물품의 크기는 1개의 품목당 %d이므로" +
                " 현재 창고안에 쌓을수 있는 수량은 %d개 입니다.\n", spaceAlignment, width);
    }

    public void wareHouseSpaceAlignment(int spaceWidth, int spaceAlignment,
                                        int arrNumber){
        System.out.printf("현재 창고의 공간의 크기는 %d 입니다.\n", spaceWidth);

        width = (spaceWidth / spaceAlignment);
        System.out.printf("현재 물품의 크기는 1개의 품목당 %d이므로" +
                " 현재 창고안에 쌓을수 있는 수량은 %d개 입니다.\n", spaceAlignment, width);

        wasteSpce = (spaceWidth % spaceAlignment);
        System.out.printf("현재 물건들을 채우고 남은 " +
                "창고의 공간 %d 입니다.\n", wasteSpce);

        arr = new int[width];
        for (int i = numZero; i < arr.length; i++){
            arr[i] = spaceAlignment;
            //System.out.printf("arr[%d]의 값 = %d\n", i, arr[i]);
        }

        arr[i] = arrNumber;
        //System.out.println("3번배열 출력 확인 = " + arr[i]);
        arrChoice = arr[i];

        System.out.printf("현재 창고에서 꺼낼려는 물건은 물품번호" +
                " %d번 입니다.\n", arrChoice);
    }
}
