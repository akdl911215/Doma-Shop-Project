package univer.ch08;

import java.io.File;

public class FileTest {
    public static void main(String[] args) {
        File myFile = new File("c:\\windows\\notepad.exe");
        System.out.println(myFile.getName()); // notepad.exe
        System.out.println(myFile.getPath()); // c:\windows\notepad.exe
        System.out.println(myFile.length()); // 201728
    }
}
