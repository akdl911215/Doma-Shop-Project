package univer.ch09;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class FilesTest3 {
    public static void main(String[] args) throws Exception {
        Path source = Paths.get("C:\\Java\\Filestest3.java");
        Path target = Paths.get("C:\\Java\\FilesTest3copy.java");

        Files.copy(source, target, StandardCopyOption.REPLACE_EXISTING);
    }
}
