public class Quiz5_2 {
    public static void main(String[] args) {
        //주사위 눈금이 홀수인지 판정해본다.
        int dice = (int)((Math.random() * 6) + 1);

        System.out.println("주사위 눈금 = " + dice);

        if(dice % 3 == 0){
            System.out.println("홀수입니다");
        } else {
            System.out.println("짝수입니다");
        }
    }
}
