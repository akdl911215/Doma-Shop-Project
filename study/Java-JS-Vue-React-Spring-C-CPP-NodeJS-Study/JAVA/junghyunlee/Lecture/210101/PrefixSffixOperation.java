public class PrefixSffixOperation {
    public static void main(String[] args) {
        int num = 3;

        // 전위 연산자는 해당 라인에서 실행된다.
        System.out.println("전위 연산자: " + ++num);
        System.out.println("전위 연산자: " + ++num);
        System.out.println("결과: " + num);

        num = 3;

        // 후위 연산자는 해당 라인 이후에 즉각 실행된다.
        System.out.println("전위 연산자: " + num++);
        System.out.println("전위 연산자: " + num++);
        System.out.println("결과: " + num);

    }
}
