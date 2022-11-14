package Tenth;

public class Test {
    public static void main(String[] args) {
        int n = (int)(Math.random() * 5) + 1;
        switch(n) {
            case 1:
                System.out.println("1");

            case 2:
                System.out.println("2");

            case 3:
                System.out.println("3");

            default:
                System.out.println("4이상");

        }
    }
}