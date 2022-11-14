package Twelveth;

// 인터페이스 작성법
// 1. public 을 적고 interface를 적는다.
// 2. 인터페이스로 만들 이름을 적는다.
// 3. 내부에 다형성을 가지게 만들 매서드 프로토타입을 작성한다.

// 다형성?
// 누가 이것을 구현하냐에 따라 결과가 달라진다.
public interface Comparable {
    // 현재 이부분은 단순히 프로타이핑만 한 것이다.
    // 프로토타이핑이 무엇이냐 ? 프로토 타입과 동일한데 다르게 부르는듯 하다.
    // 메서드의 리턴타입, 메서드 이름, 메서드 인자에 입력만 정의한 형

    // 프로토 타입만 적어야 한다.
    // 프로토 타입이란?
    // 검색결과 : 1. prototype 은 생성자 함수에 정의한 모든 객체가 공유할 원형이다.
    //           2. 모든 객체는 프토로타입(prototype)이라는 객체를 가지고 있다.
    //              이처럼 모든 객체는 최소한 하나 이상의 다른 객체로부터 상속을 받으며,
    //              이때 상속되는 정보를 제공하는 객체를 프로토타입(prototype)이라고 합니다.
    // 개인적 결론 : 모든 객체는 프로토 타입이면서 공유할 수 있는 함수다.
    //              A 객체서 B 객체로 상속을 해주는 부모를 프로토타입이라고 부른다.


    //    A                  B                  C                 D
    // ---------         ---------          ---------          ---------
    // | Web17 |     >   |        |     >   |       |     >    | Web17 |  D가 Web17을 출력하게 된다.
    // ---------         ---------          ---------          ---------
    //  프로토타입         프로토타입          프로토타입


    // 함수란? public String getAcademicBackground(){} 또는
    // public Car(int maximumNum, int speed, int numberOfDrivers,
    //               int numberOfWheels, String brand, String country,
    //               String vehicleType) { }같은것을 뜻한다.
    // 함수 앞에 new 를 붙여주면 생성자가 된다. 그렇게 실행된 결과는 새로운 객체를
    // 만들어서 그 객체를 원하는 곳에서 리턴해준다.

    // compareTo(Object other, int order);으로만 interface Comparable 실행이 가능하다.
    public int compareTo(Object other, int order);
}

