package univer.ch09;

import java.io.IOException;
import java.nio.file.DirectoryStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class FilesTest2 {
    public static void main(String[] args) throws IOException {
        Path path = Paths.get("C:\\Java");

        DirectoryStream <Path> ds = Files.newDirectoryStream(path);
        for (Path p : ds) {
            if (Files.isDirectory(p)) {
                System.out.println("[디렉토리] " + p.getFileName());
            }
            else {
                System.out.print("[파일] " + p.getFileName());
                System.out.println(" (" + Files.size(p) + ")");
            }
        }
    }
}
