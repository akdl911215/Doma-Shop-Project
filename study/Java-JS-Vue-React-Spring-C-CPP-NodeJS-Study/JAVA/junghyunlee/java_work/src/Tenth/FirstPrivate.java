package Tenth;
/*
class Test{

    private int age;
    private String name;
    private String major;

    /*
    int age;
    String name;
    String major;

    public Test(int a, String n, String m){
        age = a;
        name = n;
        major = m;
    }

    public void camouflageTest(int a, String n, String m) {
        age = a;
        name = n;
        major = m;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    public void printNum() {
        System.out.println("안녕?");
    }

    // 클래스 객체가 println() 의 입력으로 넘어올때
    // 만약 클래스 내부에 toString()이 구현되어 있다면
    // println()은 클래스 내부에 있는 toString()을 실행하게 된다.
    @Override
    public String toString() {
        return "Test{" +
                "age=" + age +
                ", name='" + name + '\'' +
                ", major='" + major + '\'' +
                '}';
    }
}

public class FirstPrivate {
    public static void main(String[] args) {
        Test t = new Test(1,"abc","alphabet");

        System.out.println(t);

        // private 으로 지정한 데이터는
        // 현재와 같이 클래스 외부('중괄호 열고 닫기')외부에서 접근할 수 없다.
        // 만약 외부에서 접근해서 값을 바꾸려면
        // setter 혹은 별도의 변경 매서드가 필요하다.

        //t.age = 3;
        //t.name = "wow";
        //t.major = "hi";

        t.camouflageTest(41, "John", "Physics");

        System.out.println(t);

        t.printNum();
    }
}
*/
// 도대체 어떤 녀석은 public 과 private 으로 분리해야 하는가?
// Good Abstraction 원칙
// 1) Information Hiding(정보 은닉)
//    우리가 사용하려는 모든 데이터를 private 으로 만든다.
// 2) Encasulation(캡슐화)
//    데이터가 있다면 이 데이터를 가공하는 기능들(매서드)이 있다.
//    데이터를 가공할 수 있는 public 매서드를 제공하도록 한다.
