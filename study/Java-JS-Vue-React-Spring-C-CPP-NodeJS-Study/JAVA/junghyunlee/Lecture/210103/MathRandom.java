public class MathRandom {
    public static void main(String[] args) {
        int randNum = (int)Math.random();

        System.out.println("임의의 랜덤 숫자 = " + randNum);
        // 이 결과는 계속 0이 나올 것이다.
        // 왜 ? 0.0 ~ 1.0(포함 x) 사이의 값이 나오기 때문이다.

        randNum = (int)(Math.random() * 10);
        System.out.println("0 ~ 9 사이의 랜덤 숫자 = " + randNum);

        randNum = (int)(Math.random() * 6) + 1;
        System.out.println("1 ~ 6 사이의 주사위 굴리가 = " + randNum);
    }
}
