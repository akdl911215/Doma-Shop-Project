package univer.ch04ver2.enumTest;

enum Day {
    SUNDAY, MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY
}


public class EnumTest1 {
    public static void main(String[] args) {
        Day day = Day.MONDAY;
        System.out.println(day);

        if(day == Day.SATURDAY || day == Day.SUNDAY)
            System.out.println("Weekend"); // 주말
        else
            System.out.println("Weekday"); // 평일

        System.out.println("");
        for (Day d : Day.values())
            System.out.println(d);

    }
}
