package Eleventh;

class Animal {
    private String name;
    private int age;
    private String gender;
    private String tribe;

    public Animal(String name, int age, String gender, String tribe) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.tribe = tribe;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getTribe() {
        return tribe;
    }

    public void setTribe(String tribe) {
        this.tribe = tribe;
    }

    @Override
    public String toString() {
        return "Animal{" +
                "name='" + name + '\'' +
                ", age=" + age +
                ", gender='" + gender + '\'' +
                ", tribe='" + tribe + '\'' +
                '}';
    }
}

class Person3 extends Animal{
    private String academicBackground;
    private String major;

    public Person3(String name, int age, String gender, String tribe, String academicBackground, String major) {
        super(name, age, gender, tribe);
        this.academicBackground = academicBackground;
        this.major = major;
    }

    public String getAcademicBackground() {
        return academicBackground;
    }

    public void setAcademicBackground(String academicBackground) {
        this.academicBackground = academicBackground;
    }

    public String getMajor() {
        return major;
    }

    public void setMajor(String major) {
        this.major = major;
    }

    @Override
    public String toString() {
        return "Person3{" + "name='" + super.getName() + "', age=" + super.getAge() +
                "', " + super.getGender() + "', tribe=" + super.getTribe() +
                ", academicBackground='" + academicBackground + '\'' +
                ", major='" + major + '\'' +
                '}';
    }
}

public class EleventhHomework2 {
    public static void main(String[] args) {
        Animal an = new Animal("Pink",5,"남자","돼지");
        System.out.println(an);

        Person3 p3 = new Person3("Jonlee", 55, "여자","인간",
                                    "박사", "생물학");
        System.out.println(p3);
    }
}
