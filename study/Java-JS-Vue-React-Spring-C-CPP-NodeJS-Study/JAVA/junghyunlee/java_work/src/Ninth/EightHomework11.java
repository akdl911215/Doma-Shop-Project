package Ninth;

class BulletinBoard {
    int postsNum, deleteNum, randNum, cnt;
    int[] board;

    public void setpostsNum() {
        postsNum = (int)(Math.random() * 50) + 10;
        board = new int[postsNum];
        System.out.println("게시판 글 갯수 : " + postsNum);
    }

    public void setBoard() {
        System.out.print("게시판 글 번호 :");
        for (int i = 0; i < postsNum; i++) {
            board[i] = i + 1;
            System.out.printf("%3d", board[i]);
        }
        System.out.println();
    }

    public void deletePosts() {
        cnt = 0;
        randNum = (int)(Math.random() * (postsNum - 1)) + 1;
        System.out.println("삭제 횟수 : " + randNum);

        System.out.print("삭제 번호 :");
        for (int i = 0; i < randNum; i++) {
            deleteNum = (int)(Math.random() * postsNum) + 1;

            System.out.printf("%3d", deleteNum);

            if (board[deleteNum - 1] == deleteNum) {
                board[deleteNum - 1] = 0;
                cnt++;
            }
        }

        System.out.printf("\n중복 제외 삭제 횟수 : %d\n", cnt);

        System.out.print("삭제 결과 :");
        for (int i = 0; i < postsNum; i++) {
            System.out.printf("%3d", board[i]);
        }
        System.out.println();
    }

    public void modifiedBoard() {
        board = new int[postsNum - cnt];

        System.out.print("수정 결과 :");
        for (int i = 0; i < postsNum - cnt; i++) {
            board[i] = i + 1;
            System.out.printf("%3d", board[i]);
        }
    }
}

public class EightHomework11 {
    public static void main(String[] args) {
        // 11) 웹 페이지에서 게시판 글을 관리하는 것과 유사한 케이스의 문제다.
        //     랜덤을 활용해서 n 개의 글을 작성한다고 가정한다.
        //     해당 게시물에서 랜덤한 횟수로 랜덤수를 생성한다.
        //     (이때 랜덤한 횟수는 n 보다 작아야 한다)
        //     이때 랜덤수로 생성한 숫자의 게시물을 지우고
        //     각각의 게시물 번호를 1, 2, 3, 4, 5 형태로 만들어준다.
        //     (배열을 활용해서 문제를 풀어보자 !)
        //
        // ex) 1, 2, 3, 4, 5, ... 10, 11, 12
        //     3, 5, 7 을 삭제했다고 가정
        //     1, 2, 4, 6, 8, 9, 10, 11, 12 와 같이 보여질텐데
        //     이것을 다시 1, 2, 3, 4, 5, 6, 7, 8, 9 형태로 보이게 만든다.
        BulletinBoard bd = new BulletinBoard();

        bd.setpostsNum();
        bd.setBoard();
        bd.deletePosts();
        bd.modifiedBoard();
    }
}
