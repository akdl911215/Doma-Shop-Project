package jacajungsuk;

// int 형 벼ᇅ수 x가 10보다 크고 20보다 작을때 true인 조건식
public class ex1 {
    public static void main(String[] args) {
        for(int x = 0; x < 100; x++) {
            if(x > 10 && x < 20) {
                System.out.printf("x값 = %d\n", x);
            }
        }
    }
}
