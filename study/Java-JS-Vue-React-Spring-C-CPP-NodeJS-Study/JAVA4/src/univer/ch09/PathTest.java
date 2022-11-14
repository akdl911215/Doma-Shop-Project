package univer.ch09;

import java.nio.file.Path;
import java.nio.file.Paths;

public class PathTest {
    public static void main(String[] args) {

        try {
            Path path = Paths.get("C:\\windows\\system32\\drivers\\etc\\hosts");
            System.out.println("파일 이름 : " + path.getFileName());
            System.out.println("상위 폴더 : " + path.getParent().getFileName());
            System.out.println("경로 길이 : " + path.getNameCount());
        } catch (Exception e) {
            System.out.println(e);
        }

    }
}
