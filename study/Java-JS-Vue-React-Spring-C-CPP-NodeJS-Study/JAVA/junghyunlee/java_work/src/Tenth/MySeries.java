package Tenth;

public class MySeries {
    // int and 에 다가 3를 대입한다.
    public final int AND = 3;
    // int or 에 다가 4를 대입한다.
    public final int OR = 4;

    // start, end 는 인트형을 저장하는 변수다.
    private int start, end;

    // Myseries에다가 int형 start, int형 end 값을 입력한다.
    public MySeries(int start, int end) {
        // this.start 에 start 값을 대입한다.
        this.start = start;
        // this.end 에 end 값을 대입한다.
        this.end = end;
    }

    // changeRange 에다가 int형 start, int형 end 값을 입력한다.
    public void changeRange(int start, int end) {
        // this.start 에다가 start 값을 대입한다.
        this.start = start;
        // this.end 에다가 end 값을 대입한다.
        this.end = end;
    }

    // 이름이 같은 매서드의 입력 인자가 달라지면
    // 매서드 오버로딩이 일어나면서 양쪽을 모두 사용할 수 있게 된다.
    // 입력 개수가 다르기 때문에 자바 컴파일러가 알아서 구별해준다.

    // 반환겂 없는 printValue에 인트형 oderNum을 입력한다.
    public void printValue(int orderNum) {
        // int cnt 에다가 1을 대입한다.
        int cnt = 1;

        // for문이 작동한다.
        // i 는 입력된 start값에서 부터 end를 포함한
        // 값까지 1씩 증가하며 작동한다.
        for(int i = start; i <= end; i++) {
            // if문은 i값과 orderNum이 나눠져서 나머지가
            // 0값일 때 작동한다.
            if(i % orderNum == 0) {
                System.out.printf("%3d", i);

                // cnt 값이 5로 나눠져서 나머지가 0일때 작동하낟.
                if(cnt % 5 == 0) {
                    System.out.println("");
                }
                // cnt는 1씩 증가한다
                cnt++;
            }
        }
        System.out.println("");
    }

    // 반환값이 없는 printValue 값을 출력한다.
    public void printValue() {
        // cnt 값 에다가 1은 대입한다.
        int cnt = 1;

        for(int i = start; i <= end; i++) {
            System.out.printf("%3d", i);

            if(cnt % 5 == 0) {
                System.out.println("");
            }
            cnt++;
        }
        System.out.println("");
    }

    // 반환값이 없는 printTwiceOrder문에 int형 oderNum1 입력,
    // int형 oderNum2 입력, final int 형 ORDER 입력

    // final int ORDER ????????
    // final 은 고정값을 보수를 편리하게 하기 위해 사용되는데
    // printTwiceOrder 에 int ORDER 가 아닌 fina int 를 사용한 이유가???
    public void printTwiceOrder(int orderNum1, int orderNum2,
                                final int ORDER) {
        // int형 cnt에 1값을 대입
        int cnt = 1;

        // for문이 작동한다.
        // i 는 입력된 start값에서 부터 end를 포함한
        // 값까지 1씩 증가하며 작동한다.
        for(int i = start; i <= end; i++) {
            // OR 인지 AND 인지에 따라 다른 동작을 취해야함

            // 스위치문은 해당하는 동작에만 작동하고 나머지는 무시한다.

            // switch (ORDER) 는 ORDER 값이 들어올때 작동한다.
            switch (ORDER) {
                // 케이스 and일때 작동한다.
                // 위에서 public final int AND = 3; 값을 줬기때문에
                // 3의 숫자가 들어왔을때 작동할듯 하다 ????????
                case AND:
                    // if문은 i 값이 orderNum1 로 나눠서 나머지가 0이면서
                    // i 값이 orderNum2 로 나눠서 나머지가 0일때 작동한다.
                    if(i % orderNum1 == 0 && i % orderNum2 == 0) {
                        // printf 는 i 값을 정수형을 3칸씩 출력한다.
                        System.out.printf("%3d", i);

                        // if문은 cnt가 5로 나눠져서 나머지가 0 일때 작동한다.
                        if(cnt % 5 == 0) {
                            System.out.println("");
                        }
                        // cnt가 1씩 증가한다.
                        cnt++;
                    }
                    // AND 문이 끝나면 switch문을 빠져나온다.
                    break;

                // 케이스 OR 일때 작동한다.
                // 위에서 public final int AND = 4; 값을 줬기때문에
                // 4의 숫자가 들어왔을때 작동할듯 하다 ????????
                case OR:
                    if(i % orderNum1 == 0 || i % orderNum2 == 0) {
                        System.out.printf("%3d", i);

                        // if문은 cnt가 5로 나눠져서 나머지가 0 일때 작동한다.
                        if(cnt % 5 == 0) {
                            System.out.println("");
                        }
                        // cnt가 1씩 증가한다
                        cnt++;
                    }
                    // OR 문이 끝나면 switch문을 빠져나온다.
                    break;

                    // 위의 두가지 케이스가 아니라면 default가 진행된다.
                default:
                    System.out.println("잘못된 입력입니다.");
                    break;
            }
        }
    }

    // int valueSum은 int 값들을 더하기 위해 만들었다.
    public int valueSum() {
        //int sum 에다가 0 을 대입한다.
        int sum = 0;

        // for문이 작동한다.
        // i 는 입력된 start값에서 부터 end를 포함한
        // 값까지 1씩 증가하며 작동한다.
        for(int i = start; i <= end; i++) {
            // for문이 돌아가면서 i 값에 대입되는 숫자들이 모두 sum으로 더해진다
            sum += i;
        }

        // sum 값을 리턴한다.
        return sum;
    }

    // fibnacciSeriesd을 수행하면서 n 값을 입력받는다.
    public void fibnacciSeries(int n) {
        int first = 1;
        int second = 1;
        int res = 0;
        int cnt = 1;

        // 입력받은 n값에 -2를 해준다.
        n -= 2;

        System.out.printf("%4d%4d", first, second);

        // while 문은 입력받은 n값 - 2 가 2보다 크다면 작동한다.
        while(n-- > 0) {
            res = first + second;
            first = second;
            second = res;
            System.out.printf("%4d", res);

            if(cnt % 5 == 3) {
                System.out.println("");
            }
            cnt++;
        }
    }
}