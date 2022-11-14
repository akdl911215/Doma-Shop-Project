package Eighth;

public class test {
    public static void main(String[] args) {
        final int FixNum = 3;
        int num = 5, res = 0;
        for(int i = 1; i <= num; i++) {

                int randomDice = (int)(Math.random() * 6) + 1;
                System.out.printf("%d 번째 사람의 1 번째 주사위 결과값 = %d\n", i, randomDice);

                int randomDice2 = (int)(Math.random() * 6) + 1;
                System.out.printf("%d 번째 사람의 2 번째 주사위 결과값 = %d\n", i, randomDice2);

                int randomDice3 = (int)(Math.random() * 6) + 1;
                System.out.printf("%d 번째 사람의 3 번째 주사위 결과값 = %d\n\n", i, randomDice3);

        }
    }
}

