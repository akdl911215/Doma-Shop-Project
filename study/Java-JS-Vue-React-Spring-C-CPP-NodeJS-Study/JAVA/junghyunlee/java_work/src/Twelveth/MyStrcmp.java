package Twelveth;

import static Twelveth.Utility.MYSTRCMP;
import static Twelveth.Utility.STRCMPTEST;

// 실질적으로 interface 에 작성한 프로토타이핑한 메서드는
// 이것을 implements 하는 클래스에서 작성해줘야 한다.

// MyStrcmp 에 프로토타입 Comparable을 연결해준다.
public class MyStrcmp implements Comparable {
    // 프라이빗 + 더블형 실수 area 변수를 생성
    private double area;

    // MyStrcmp 에다가 double a 를 입력받는다.
    public MyStrcmp(double a) {
        // area 에다가 double형 a 를 할당
        area = a;
    }

    // 정수형 processCompare 에 다가 MyStrcmp other 값을 입력
    // other 값은 어디에서 ~~~?????
    // 아마 public class StrcmpInterfaceTest 에서 new MyStrcmp
    // 에서 입력받은 값이 입력 될 듯하다.
    public int processCompare(MyStrcmp other) {

        // if문은 this.area (현재 가지고 있는 area) 값보다
        // 새로 입력된 other.area 가 클때 작동한다.

        // 의문점 : this.area는 어디에서 입력받은건가 ??
        // 아마 private double area; 값일 듯 하다.
        // other.area는 public class StrcmpInterfaceTest  값일 듯 하다.
        if(this.area < other.area) {
            // other.area가 크면 -1 리턴
            return -1;

            // else if문은 this.area (현재 가지고 있는 area) 값보다
            // 새로 입력된 other.area 가 작을때 작동한다.
        } else if(this.area > other.area) {
            // other.area가 작으면 1 리턴
            return 1;
        } else {

            // 그 외는 0을 리턴
            return 0;

            // -1, 1, 0 을 리턴하는 이유는
            // public class StrcmpInterfaceTest 에서
            // 0과 비교 후 출력을 위해서이다.
        }
    }

    // 정수형만 입력받는 processCompare 에 다가 StrcmpTest other을 입력한다
    public int processCompare(StrcmpTest other) {
        // if 문은 현재가지고 있는 this.area 보다 StrcmpTest 에 있는
        //  public double getArea() 의 area 값이 클때 작동한다.

        // this.area 는 private double area; 값일 듯 하다.
        // 여기 other.getArea는 StrcmpTest에서 get값을 받아오고
        // 그걸 타고 들어가면 public class StrcmpInterfaceTest 에서
        // 값을 받는다.
        if(this.area < other.getArea()) {
            return -1;
            // else if 문은 현재가지고 있는 this.area 보다 StrcmpTest 에 있는
            //  public double getArea() 의 area 값이 작을때 작동한다.
        } else if(this.area > other.getArea()) {
            return 1;
        } else {
            return 0;
        }
    }

    // 정수형만 입력받는 processMyStrcmp에 Object otherObj 입력값 입력한다.
    // 뭔가 입력을 받는듯 하다. Object 가 다형성? 으로 인해서 받을 수 있다고 했던거
    // 같다??? 정리가 안됨..
    public int processMyStrcmp(Object otherObj) {
        // Utility 에 public static final int STRCMPTEST = 2; 값을
        // MyStrcmp other 에 할당한다.
        // 왜 대입해주는지 모르겠다 . ??????????????????????.
        // 결국은  public int processCompare(StrcmpTest other) 로 가서
        // 값을 크냐 작냐를 비교하기 위해 대입한다고 생각이 든다.
        MyStrcmp other = (MyStrcmp) otherObj;

        // 위의 MyStrcmp other 에 2 값을 할당해주면
        //  processCompare(other) 값을 반환한다.
        return processCompare(other);
    }

    // 정수형만 입력받는 processStrcmpTest 에 Object otherObj 입력한다.
    public int processStrcmpTest(Object otherObj) {
        // StrcmpTest other 에 다가 public StrcmpTest(double a) 에 있는
        // area = a 값을 할당한다.
        // 결국 맨 위쪽의 private double area; 값이고
        // 그것이 public MyStrcmp(double a) 으로 들어가기 때문에
        // double a 로 입력받은 값이 StrcmpTest other 로 대입 된다.
        // 왜 대입해주는지 모르겠다 . ??????????????????????
        StrcmpTest other = (StrcmpTest) otherObj;


        // StrcmpTest other 값을 반환해주는데
        // 결국 double a 로 입력받은 실수형 값을 반환할 것이다.
        return processCompare(other);
    }

    // Object ??? 이건 뭐야 ?
    // Object 는 우리가 선언하지 않아도 항상 자바에 상주해있다.

    // Math.random() 과 static 과 같은 종류인듯??
    //O Object 는 모든 정보를 아우르고 있는 가장 거대한 집합이다.

    // 여기서 모든 정보란 ? 우리가 사용하는 모든 클래스 등등을 의미한다.
    // 그러므로 타입 캐스팅(형 변환)을 통해
    // 어떤 데이터든 Object 형태로 받을 수 있다.
    // 만약에 내용을 들은 사람이 C 개발자라면 void * 생각하면 됩니다.

    // 정수형으로만 입력 가능한 compareTo 만들고
    // (Object otherObj, int ORDER) 입력값 2개를 받는다.
    public int compareTo(Object otherObj, int ORDER) {

        // 인트형 res 에 0을 할당한다.
        int res = 0;

        // ORDER 값을 입력받았을 때 switch 문을 실행한다
        switch (ORDER) {
            // Utility에 있는 public static final int MYSTRCMP 에
            // 1값이 대입될 때 케이스 작동
            case MYSTRCMP:
                // res 에 다가 processMyStrcmp(otherObj) 를 할당한다
                res = processMyStrcmp(otherObj);
                break;
            // Utility에 있는 public static final int STRCMPTEST 에
            // 2값 대입될 때 케이스 작동
            case STRCMPTEST:
                // res 에 다가 processStrcmpTest(otherObj) 를 할당한
                res = processStrcmpTest(otherObj);
                break;
                // 그외는 그냥 나간다.
            default:
                break;
        }

        return res;
    }
}
