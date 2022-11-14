package Ninth;

class ScoreCalculator {
    int classNum, studentNum;
    int[][] score;
    float[] mean, varian, stdDev;
    int maxMean, maxStdDev, minStdDev;

    public ScoreCalculator(int classNum, int studentNum) {
        this.classNum = classNum;
        this.studentNum = studentNum;

        score = new int[classNum][studentNum];
        mean = new float[classNum];
        varian = new float[classNum];
        stdDev = new float[classNum];

        for (int i = 0; i < classNum; i++) {
            System.out.printf("%d반 성적 :", i + 1);
            for (int j = 0; j < studentNum; j++) {
                score[i][j] = (int) (Math.random() * 101);
                System.out.printf("%4d", score[i][j]);
            }
            System.out.println();
        }
        System.out.println();
    }

    public void calcMean() {
        int sum = 0;

        for (int i = 0; i < classNum; i++) {
            for (int j = 0; j < studentNum; j++) {
                sum += score[i][j];
            }

            mean[i] = sum / (float) studentNum;
            sum = 0;
        }
    }

    public void calcVarian() {
        int sum = 0;

        for (int i = 0; i < classNum; i++) {
            for (int j = 0; j < studentNum; j++) {
                sum += Math.pow(score[i][j] - mean[i], 2);
            }

            varian[i] = sum / (float) studentNum;
            sum = 0;
        }
    }

    public void calcStdDev() {
        for (int i = 0; i < classNum; i++) {
            stdDev[i] = (float) (Math.sqrt(varian[i]));
        }
    }

    public void findMaxMin() {
        maxMean = 0;
        maxStdDev = 0;
        minStdDev = 0;

        for (int i = 1; i < classNum; i++) {
            if (mean[maxMean] < mean[i]) {
                maxMean = i;
            }

            if (stdDev[maxStdDev] < stdDev[i]) {
                maxStdDev = i;
            }

            if (stdDev[minStdDev] > stdDev[i]) {
                minStdDev = i;
            }
        }
    }

    public int getMaxMean() {
        return maxMean;
    }

    public int getMaxStdDev() {
        return maxStdDev;
    }

    public int getMinStdDev() {
        return minStdDev;
    }
}

public class EightHomework9 {
    public static void main(String[] args) {
        // 9) 오늘 풀었던 평균, 분산, 표준편차를 활용해서
        //    점수 관리 시스템을 만들어 보자 !
        //    학급을 3개 정도 만들고 랜덤한 점수를 준다.
        //    평균이 가장 높은 학급,
        //    표준편차가 가장 낮은 학급,
        //    표준편차가 가장 큰 학급을 선별하도록 프로그래밍 해 보자 !
        ScoreCalculator sc = new ScoreCalculator(3, 20);

        sc.calcMean();
        sc.calcVarian();
        sc.calcStdDev();
        sc.findMaxMin();

        for (int i = 0; i < sc.classNum; i++) {
            System.out.printf("%d반\n평균 : %.2f점\n", i + 1, sc.mean[i]);
            System.out.printf("분산 : %.2f\n", sc.varian[i]);
            System.out.printf("표준편차 : %.2f점\n", sc.stdDev[i]);
            System.out.println();
        }

        System.out.printf("평균이 가장 높은 학급 : %d반\n", sc.getMaxMean() + 1);
        System.out.printf("표준편차가 가장 큰 학급 : %d반\n", sc.getMaxStdDev() + 1);
        System.out.printf("표준편차가 가장 낮은 학급 : %d반\n", sc.getMinStdDev() + 1);
    }
}