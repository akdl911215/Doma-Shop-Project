package univer.ch04ver2.interfacePolymorphism;

interface Computer {
    public void calculate(String order);
}

class PersonalComputer implements Computer {
    public void calculate(String order) {
        System.out.println("PersonalComputer : " + order);
    }
}

class Workstation implements Computer {
    public void calculate(String order) {
        System.out.println("Workstation : " + order);
    }
}

public class ComputerTEst {
    PersonalComputer pc = new PersonalComputer();

    Workstation ws = new Workstation();

}
