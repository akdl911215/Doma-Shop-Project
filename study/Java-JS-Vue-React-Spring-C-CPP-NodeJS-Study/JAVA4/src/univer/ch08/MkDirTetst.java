package univer.ch08;

import java.io.File;

public class MkDirTetst {
    public static void main(String[] args) {
        File myFile = new File("c:\\a\\b");
        if (myFile.mkdirs())
            System.out.println("Diretory was created.");
        else
            System.out.println("Directory was not created.");
    }
}
