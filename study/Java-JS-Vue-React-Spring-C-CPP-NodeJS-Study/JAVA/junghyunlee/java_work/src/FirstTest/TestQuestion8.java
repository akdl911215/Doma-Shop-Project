package FirstTest;

// 1) 공간의 크기는 5만 ~ 10만 입력
// 2) 공간내의 정리 크기 입력 = 4096
// 3) 공간내에 n값을 넣을시 몇구역으로 사용가능한가 출력

public class TestQuestion8 {
    public static void main(String[] args) {

        wareHouse wh = new wareHouse();
        wh.wareHouseSpaceAlignment(50000,4096);
    }
}
