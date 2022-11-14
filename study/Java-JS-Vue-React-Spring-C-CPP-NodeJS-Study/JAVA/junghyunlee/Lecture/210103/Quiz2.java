public class Quiz2 {
    public static void main(String[] args) {
        //1 ~ 10 까지의 숫자중 8만 제외하고 출력해보자
        final int Target = 10;
        int i = 0;

        while(i < Target) {
            i++;

            if(i == 8){
                continue;
            }

            System.out.println("i = " + i);
        }
    }
}
