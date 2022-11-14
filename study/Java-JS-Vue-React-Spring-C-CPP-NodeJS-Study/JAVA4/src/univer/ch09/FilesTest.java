package univer.ch09;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

public class FilesTest {
    public static void main(String[] args) throws Exception {
        Path path = Paths.get("C:\\Java\\FilesTest1.java");

        System.out.println("C:\\Java\\FilesTest1.java");

        if (Files.isDirectory(path))
            System.out.println("디렉토리입니다.");

        if (Files.isRegularFile(path))
            System.out.println("일반파일입니다.");

        System.out.println("크기 : " + Files.size(path));
        System.out.println("소유자 : " + Files.getOwner(path).getName());

        if (Files.isHidden(path))
            System.out.println("숨김 파일입니다.");

        if (Files.isReadable(path))
            System.out.println("읽기 가능합니다.");

        if (Files.isWritable(path))
            System.out.println("수정 가능합니다.");

        System.out.println("최종 수정 시간 : " + Files.getLastModifiedTime(path));
    }
}
