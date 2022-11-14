package FirstTest;

// 배치된 물건을 꺼낸다?
// 물건이 뭔지알려면 번호표를 붙혀준다
// 들어가는 물건마다 번호표를 붙힌다
// 원하는 물건을 뺄때 배열번호로 뺀다.

// 1) 공간의 크기는 5만 ~ 10만 입력
// 2) 공간내의 정리 크기 입력 = 4096
// 3) 공간내에 n값을 넣을시 몇구역으로 사용가능한가 출력
// 4) 나머지가 몇인지 출력
// 5) 4096 값마다 배열에 넣어준다.
// 6) 배열넘버를 입력하면 물건을 꺼낸다.
public class TestQuestion9 {
    public static void main(String[] args) {

        wareHouse wh = new wareHouse();
        wh.wareHouseSpaceAlignment(50000,4096,3);
    }
}
