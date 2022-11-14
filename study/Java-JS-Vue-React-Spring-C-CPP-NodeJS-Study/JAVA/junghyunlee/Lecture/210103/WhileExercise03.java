public class WhileExercise03 {
    public static void main(String[] args) {
        int num = 2, sum = 0;

        while(num < 20){
            if(num % 2 == 0){
                System.out.println("num 값은 = " + num);
                sum += num;
            }
            num++;
        }

        // 2 ~ 18
        // 2 4 6 8 10 12 14 16 18
        System.out.println("짝수의 총합 = " + sum);
    }
}
