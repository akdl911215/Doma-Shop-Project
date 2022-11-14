public class WhileExercise02 {
    public static void main(String[] args) {
        int num = 2;
        //int num1 = ( (num % 2) == 0);

        while(num < 20) {
            int num1 = num++;
            if (num1 % 2 == 0) {
                System.out.println("num = " + num1);
            }
        }
    }
}
