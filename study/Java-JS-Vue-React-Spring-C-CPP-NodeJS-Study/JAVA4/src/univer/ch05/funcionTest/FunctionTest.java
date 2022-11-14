package univer.ch05.funcionTest;

import java.util.function.Function;

class Student {
    private String name;
    private int year;
    public Student(String name, int year) {
        this.name = name;
        this.year = year;
    }
    public String getName() {
        return name;
    }
    public int getYear() {
        return year;
    }
}

public class FunctionTest {
    public static void main(String[] args) {
        Student stu = new Student("LEE", 32);
        Function<Student, String> function1 = s -> s.getName();
        Function<Student, Integer> function2 = s -> s.getYear();

        System.out.println(function1.apply(stu));
        System.out.println(function2.apply(stu));
    }
}
