package test220111.comparable;

public class StudentTest {
    public static void main(String[] args) {

        Student a = new Student(17, 2); // 17살 2반
        Student b = new Student(18, 1); // 18살 1반

        int isBig = a.compareTo(b); // a 자기자신과 b객체를 비교한다.

        if (isBig > 0) System.out.println("a 객체가 b객체보다 크다.");
        else if (isBig == 0) System.out.println("두 객체의 크기가 같다.");
        else System.out.println("a 객체가 b 객체보다 작다.");
    }
}

// Comparable 특징
// 1. 자기 자신과 매개변수를 비교한다.
// 2. compareTo 메소드를 반드시 구현해야 한다.
class Student implements Comparable<Student> {

    int age;            // 나이
    int classNumber;    // 학급

    Student(int age, int classNumber) {
        this.age = age;
        this.classNumber = classNumber;
    }

    // Comparable의 compareTo는 자기 자신과 매개변수를 비교한다고 했고, compareTo는 정수를
    // 반환하며, 자기 자신을 기준으로 상대방과의 차이 값을 비교하여 반환한다고 했다.
    @Override
    public int compareTo(Student o) {

        /*
        // 자기 자신의 age가 o의 age보다 크다면 양수
        if (this.age > o.age) return 1;

        // 자기 자신의 age와 o의 age가 같다면 0
        else if (this.age == o.age) return 0;

        // 자기 자신의 age가 o의 age보다 작다면 음수
        else return -1;
        */

        // 밑에 처럼 반환해도 된다.
        // 만약 자신의 age가 o의 age보다 크다면 양수가 반환 될 것이고,
        // 같다면 0을, 작다면 음수를 반환할 것이다.
        return this.age - o.age;
    }
}
