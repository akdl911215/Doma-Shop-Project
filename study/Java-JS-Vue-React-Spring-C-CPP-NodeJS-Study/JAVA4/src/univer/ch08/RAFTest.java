package univer.ch08;

import java.io.RandomAccessFile;

public class RAFTest {
    public static void main(String[] args) {
        try {
            RandomAccessFile raf;
            raf = new RandomAccessFile("c:\\java\\test.txt", "rw");

            for (int i = 0; i < 10; i++)
                raf.write(i);

            for (int i = 9; i >=0; i--){
                raf.seek(i); // pos에 지정된 위치로 파일 포인터를 이동시킨다. 파일 포인터는 바이트 단위로 표시된다.
                System.out.println(raf.read());
            }
        } catch (Exception e) {
            System.out.println(e);
        }
    }
}

/*
9
8
7
6
5
4
3
2
1
0
*/