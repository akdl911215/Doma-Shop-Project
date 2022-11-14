package univer.ch08;

import java.io.Console;

public class ConsoleTest2 {
    public static void main(String[] args) {
        String name;
        char[] pw;
        Console con = System.console();

        System.out.print("name : ");
        name = con.readLine();
        System.out.print("password : ");
        pw = con.readPassword();

        System.out.println("name : " + name);
        System.out.println("password : " + pw);
    }
}
