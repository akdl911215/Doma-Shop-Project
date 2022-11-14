package Twelveth;

import static Twelveth.Utility.MYSTRCMP;
import static Twelveth.Utility.STRCMPTEST;

// 게임 설명 :
// 나는 모험가로 게임을 시작한다. 모험가는 스킬이 2개가 있다 > 그깃어 skill1
// 모험가는 1차전직을 할 수 있는 방법은 3가지다.
// 1) 전사 2) 도적 3) 마법사 중 1개를 택해야 한다.
// 3개 중 1개를 택한다면 해당하는 직업의 기술을 2가지 얻어서 모험가 기술 2개
// 포함해서 4가지를 사용할 수 있다. > 그것이 skill2
// 1차전직을 선택한 거에 따라서 또 전직이 가능하다.
// 1) 전사 > 워로드 2) 도적 > 어쌔신 3) 마법사 > 위자드
// 2차전직을 한다면 모험가, 1차전직기술, 2차전직기술 2개씩을 포함해서
// 총 6개의 마법을 사용한다. > 그것이 skill3

// 코드 순서 :
// 1) 모험가 일때 스킬 / 데미지 출력
// 2) 1차 전직을 직업을 선택할 수 있도록 케이스문 작성
// 3) 모험가,1차 전직 스킬 / 데미지 출력
// 4) 2차 전직 직업을 선택할 수 있도록 케이스문 작성
//    다른직업이 다른직업을 선택 시 "다시 선택하세요"라는
//    출력도 필요함.
// 5) 모험가, 1차, 2차 전직 스킬 / 데미지 출력
// interface 로 모든 직업들의 1번 스킬 , 1번 데미지 값 , 2번 스킬 , 2번 데미지
// 값을 입력 받을 수 있게 된다.
/*
// 인터페이스는 해당 표준 규격과
interface SkillOption{
    String skill( String v1, int v2, String x1, int x2);
}

// adventurer 에 다가 SkillOption 의 값을 전부 상속한다.
class adventurer implements SkillOption {

    // 각 직업들을 String 으로 만든다.
    private String 모험가;
    private String 전사;
    private String 도적;
    private String 마법사;
    private String 워로드;
    private String 어쌔신;
    private String 위자드;
    private String FirstOrder;
    private String SecondaryOrder;


    // adventurer 생성자에 다가 job 입력을 직업을 선택한다.
    // 선택하고 싶은 직업을 입력합니다.
    public adventurer(Object jobChoice) {
        // 직업을 선택하고 싶으면 String값을 입력하면된다.
        // 만약에 전사라면 프린트에서 "전사"라고 입력하면 될듯 하다.
        // 입력하면 받을 수 있는 변수가 있어야겠다.

        // 입력받은 값을 받기 위해 private String FirstOrder;
        // 을 선언하고 할당 받는다.
        //FirstOrder = jobChoice;
    }

    // 1차 전직을 선택했으니 해당하는 2차전직을 선택한다.
    public String SecondaryJob(String SdJobChoide) {
        // 2차 직업을 선택하고 싶으면 String값을 입력하면된다.
        // 만약에 선택하고 싶은게 워로드라면 프린트에서
        // "워로드"라고 입력하면 될듯 하다.
        // 만약에 전사가 아닌 다른직업을 선택해서 워로드를 선택할
        // 경우 다시 선택하라고 해야할듯 하다
        // if문을 사용 해야 할듯 하다.

        SecondaryOrder = SdJobChoide;

        // 만약에 워로드를 선택한 직업이 전사가 아닌
        // 다른직업이 선택했을 때 다시 선택하게 할려면?
        // 또한 전사가 워로드가 아닌 다른직업을 선택했을 경우
        // 다시선택하게 해야한다고 해야한다.
        //if(){

        return SecondaryOrder;
        }
    }




    public int FirstOrderJob(String n) {

        return FirstOrderJob(n);
    }


    public String skill(String v1, int v2, String x1, int x2) {
        return v1+v2+x1+x2;
    }
    public void print() {
        System.out.println("모험가 스킬이 발동 하였습니다");
    }
}


public class TwelvethHomework {
    public static void main(String[] args) {

        System.out.println("돌던지기 = " + "2"+" 창던지기 = " + "3");

    }
}


 */