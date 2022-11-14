package univer.ch09;

import java.nio.file.FileStore;
import java.nio.file.FileSystem;
import java.nio.file.FileSystems;

public class FileSystemTest {
    public static void main(String[] args) throws Exception {
        FileSystem fs = FileSystems.getDefault();
        for (FileStore store : fs.getFileStores()) {
            System.out.println("드라이버 이름 : " + store.name());
            System.out.println("파일 시스템 : " + store.type());

            // 드라이버 전체 공간 크기(바이트단위) 리턴
            long total = store.getTotalSpace();

            // 할당되지 않은 공간 크기(바이트단위) 리턴
            long free = store.getUnallocatedSpace();
            System.out.println("전체 공간 : " + total + " bytes");
            //System.out.println("사용 중인 공간 : " + (total ? free) + " bytes");
            // 위의 문법 교과서에 나오는데 안됨; 뭐지?
            // 밑에 처럼 일듯?
            System.out.println("사용 중인 공간 : " + (total - free) + " bytes");
            System.out.println("사용 가능한 공간 : " + free + " bytes");
        }
    }
}
