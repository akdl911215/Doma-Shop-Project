public class InfinityLoopTest2 {
    public static void main(String[] args) {
        int i = 1;

        for(;; i++) {
            System.out.println("i = " + i);
        }
    }
}
