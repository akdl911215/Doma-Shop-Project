package test220111.comparator;



import java.util.Comparator;

public class StudentTest2 {
    public static void main(String[] args) {
        Student2 a = new Student2(17, 2); // 17살 2반
        Student2 b = new Student2(18, 1); // 18살 1반
        Student2 c = new Student2(15, 3); // 18살 1반

        int isBig = a.compare(b, c); // b와 c객체를 비교한다.

        if (isBig > 0) System.out.println("a 객체가 b객체보다 크다.");
        else if (isBig == 0) System.out.println("두 객체의 크기가 같다.");
        else System.out.println("a 객체가 b 객체보다 작다.");
    }
}

class Student2 implements Comparator<Student2> {

    int age;            // 나이
    int classNumber;    // 학급

    Student2(int age, int classNumber) {
        this.age = age;
        this.classNumber = classNumber;
    }


    @Override
    public int compare(Student2 o1, Student2 o2) {
        return o1.classNumber - o2.classNumber;
    }
}
