package Eighth;


import java.util.Scanner;

public class test2 {
    public static void main(String[] args) {

        //11) 웹 페이지에서 게시판 글을 관리하는 것과 유사한 케이스의 문제다.
        //    랜덤을 활용해서 n 개의 글을 작성한다고 가정한다.
        //    해당 게시물에서 랜덤한 횟수로 랜덤수를 생성한다.
        //    (이때 랜덤한 횟수는 n 보다 작아야 한다)
        //    이때 랜덤수로 생성한 숫자의 게시물을 지우고
        //    각각의 게시물 번호를 1, 2, 3, 4, 5 형태로 만들어준다.
        //    (배열을 활용해서 문제를 풀어보자!)

        //ex) 1, 2, 3, 4, 5, ... 10, 11, 12
        //    3, 5, 7 을 삭제했다고 가정
        //    1, 2, 4, 6, 8, 9, 10, 11, 12 와 같이 보여질텐데
        //    이것을 다시 1, 2, 3, 4, 5, 6, 7, 8, 9 형태로 보이게 만든다.

        // 랜덤으로 글을 작성을 한다 > 20이면 20개글 생성
        // 10을 입력하면 1~9의 랜덤횟수로 랜덤수 발생
        // 랜덤수가 생성된 게시물 지운다
        int num = (int)(Math.random() * 10) + 5;
        int []BulletinBoard = new int[num];
        System.out.println("num 값 = " + num);

//        Scanner scan = new Scanner(System.in);
//        System.out.print("숫자를 입력하세요 = ");
//        int random = scan.nextInt();

        for(int i = 0; i <num; i++) {
            int randomNum = (int) (Math.random() * (num - 1)) + 1;
            System.out.println(randomNum);
        }

        // 배열 n 개 - 랜덤수 = 배열 n 개
    }
}


