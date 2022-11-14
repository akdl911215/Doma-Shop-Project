import java.util.Random;

public class WhileExercise04d1 {
    public static void main(String[] args) {
        Random rand = new Random();

        int i = 0;

        while (i < 100) {

            int diceA = (int) (Math.random() * 6 + 1);
            int diceB = rand.nextInt(6) + 1;

            if (diceA > diceB) {
                System.out.printf("A 승리! %d vs %d\n", diceA, diceB);
            } else if (diceA < diceB) {
                System.out.printf("B 스일! %d vs %d\n", diceA, diceB);
            } else {
                System.out.printf("무승부! %d vs %d\n", diceA, diceB);
            }

            i++;
        }
    }
}

