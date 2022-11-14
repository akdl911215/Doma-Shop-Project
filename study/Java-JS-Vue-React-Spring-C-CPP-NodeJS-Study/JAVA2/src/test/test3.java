package test;

public class test3 {
    public static void main(String[] args) {
        int N = 0, S = 0;
        do {
            N++;
            System.out.println("위 N : " + N);
            S += N;
            System.out.println("S = " + S);
//            System.out.printf("S(%d) += N(%d) : %d\n", S, N, S+N);
            N++;
            System.out.println("밑 N : " + N);
            S -= N;
            System.out.println("S = " + S);
//            System.out.printf("S(%d) -= N(%d) : %d\n", S, N, S-N);
        } while (N!=10);
        System.out.println(S);
    }
}
