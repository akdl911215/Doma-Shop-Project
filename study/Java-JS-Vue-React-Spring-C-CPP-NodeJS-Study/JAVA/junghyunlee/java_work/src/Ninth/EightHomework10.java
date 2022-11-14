package Ninth;

class GuGuDan {
    int start, end;

    public GuGuDan() {
        start = 2;
        end = 9;
    }

    public GuGuDan(int start, int end) {
        this.start = start;
        this.end = end;
    }

    public void printGuGuDan() {
        final int START = 1;
        for(int i = start; i <= end; i++){
            for(int j = START; j <=9; j++){
                System.out.printf("%3d  x%3d = %3d\n", i, j, i * j);
            }
            System.out.println("");
        }
    }
}

public class EightHomework10 {
    public static void main(String[] args) {
        GuGuDan ggd = new GuGuDan();

        ggd.printGuGuDan();
    }
}
