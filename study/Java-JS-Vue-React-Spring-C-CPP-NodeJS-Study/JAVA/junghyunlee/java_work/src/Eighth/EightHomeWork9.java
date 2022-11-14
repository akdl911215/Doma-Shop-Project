package Eighth;

class ScoreCalculator1{
    int studentNum;
    int[] score;
    float mean; // 평균
    float variance; // 분산
    float stdDeviation; // 표준편차

    public ScoreCalculator1(int studentNum1) {
        this.studentNum = studentNum1;
        score = new int[studentNum];

        for(int i = 0; i < studentNum1; i++) {
            score[i] = (int)(Math.random() * 101);
        }
    }

    public void totalMember(int studentNum1){
        System.out.printf("1반의 학생 수 = %d\n", studentNum1);
    }

    public void printScore(){
        int cnt = 1;

        for(int i = 0; i < studentNum; i++){
            System.out.printf("%4d", studentNum);

            if(cnt % 10 == 0){
                System.out.println("");
            }

            cnt++;
        }
    }

    public void calcMean() { //평균
        int sum = 0;

        for(int i = 0; i < studentNum; i++) {
            sum += score[i];
        }

        mean = sum / (float)studentNum;
    }

    public float getMean() {
        return mean;
    }

    public void calcVariance() {// 분산
        float sum = 0;

        // sigma (샘플 - 평균)^2 / 전체숫자 = 분산
        for(int i = 0; i < studentNum; i++) {
            // 제곱
            sum += Math.pow(score[i] - mean, 2);
        }

        variance = sum / (float)studentNum;
    }

    public float getVariance() {
        return variance;
    }

    public void calcStdDeviation() { //표준편차
        // 루트
        stdDeviation = (float)Math.sqrt(variance);
    }

    public float getStdDeviation() {
        return stdDeviation;
    }

    public void printScores() {
        int cnt = 1;

        for(int i = 0; i < studentNum; i++) {
            System.out.printf("%4d", score[i]);

            if(cnt % 10 == 0) {
                System.out.println("");
            }

            cnt++;
        }
    }
}

class ScoreCalculator2{
    int studentNum;
    int[] score;
    float mean; // 평균
    float variance; // 분산
    float stdDeviation; // 표준편차

    public ScoreCalculator2(int studentNum2) {
        this.studentNum = studentNum2;
        score = new int[studentNum];

        for(int i = 0; i < studentNum; i++) {
            score[i] = (int)(Math.random() * 101);
        }
    }

    public void totalMember(int studentNum2){
        System.out.printf("\n2반의 학생 수 = %d", studentNum2);
    }

    public void printScore(){
        int cnt = 1;

        for(int i = 0; i < studentNum; i++){
            System.out.printf("%4d", studentNum);

            if(cnt % 10 == 0){
                System.out.println("");
            }

            cnt++;
        }
    }

    public void calcMean() { //평균
        int sum = 0;

        for(int i = 0; i < studentNum; i++) {
            sum += score[i];
        }

        mean = sum / (float)studentNum;
    }

    public float getMean() {
        return mean;
    }

    public void calcVariance() {// 분산
        float sum = 0;

        // sigma (샘플 - 평균)^2 / 전체숫자 = 분산
        for(int i = 0; i < studentNum; i++) {
            // 제곱
            sum += Math.pow(score[i] - mean, 2);
        }

        variance = sum / (float)studentNum;
    }

    public float getVariance() {
        return variance;
    }

    public void calcStdDeviation() { //표준편차
        // 루트
        stdDeviation = (float)Math.sqrt(variance);
    }

    public float getStdDeviation() {
        return stdDeviation;
    }

    public void printScores() {
        int cnt = 1;

        for(int i = 0; i < studentNum; i++) {
            System.out.printf("%4d", score[i]);

            if(cnt % 10 == 0) {
                System.out.println("");
            }

            cnt++;
        }
    }
}

class ScoreCalculator3{
    int studentNum;
    int[] score;
    float mean; // 평균
    float variance; // 분산
    float stdDeviation; // 표준편차

    public ScoreCalculator3(int studentNum3) {
        this.studentNum = studentNum3;
        score = new int[studentNum];

        for(int i = 0; i < studentNum; i++) {
            score[i] = (int)(Math.random() * 101);
        }
    }

    public void totalMember(int studentNum3){
        System.out.printf("3반의 학생 수 = %d\n", studentNum3);
    }

    public void printScore(){
        int cnt = 1;

        for(int i = 0; i < studentNum; i++){
            System.out.printf("%4d", studentNum);

            if(cnt % 10 == 0){
                System.out.println("");
            }

            cnt++;
        }
    }

    public void calcMean() { //평균
        int sum = 0;

        for(int i = 0; i < studentNum; i++) {
            sum += score[i];
        }

        mean = sum / (float)studentNum;
    }

    public float getMean() {
        return mean;
    }

    public void calcVariance() {// 분산
        float sum = 0;

        // sigma (샘플 - 평균)^2 / 전체숫자 = 분산
        for(int i = 0; i < studentNum; i++) {
            // 제곱
            sum += Math.pow(score[i] - mean, 2);
        }

        variance = sum / (float)studentNum;
    }

    public float getVariance() {
        return variance;
    }

    public void calcStdDeviation() { //표준편차
        // 루트
        stdDeviation = (float)Math.sqrt(variance);
    }

    public float getStdDeviation() {
        return stdDeviation;
    }

    public void printScores() {
        int cnt = 1;

        for(int i = 0; i < studentNum; i++) {
            System.out.printf("%4d", score[i]);

            if(cnt % 10 == 0) {
                System.out.println("");
            }

            cnt++;
        }
    }
}

public class EightHomeWork9 {
    public static void main(String[] args) {
        //9) 오늘 풀었던 평균, 분산, 표준편차를 활용해서
        //   점수 관리 시스템을 만들어보자!
        //   학급을 3개 정도 만들고 랜덤한 점수를 준다.
        //   평균이 가장 높은 학급,
        //   표준편차가 가장 낮은 학급,
        //   표준편차가 가장 큰 학급을 선별하도록 프로그래밍 해보자!
        ScoreCalculator1 scc1 = new ScoreCalculator1(20);
        ScoreCalculator2 scc2 = new ScoreCalculator2(21);
        ScoreCalculator3 scc3 = new ScoreCalculator3(18);


        System.out.println("1반 학생들의 점수를 출력합니다.");
        scc1.totalMember(20);
        scc1.calcMean();
        System.out.println("1 반의 평균은 = " + scc1.getMean());

        scc1.calcVariance();
        System.out.println("1 반의 분산은 = " + scc1.getVariance());

        scc1.calcStdDeviation();
        System.out.println("1 반의 표준편차는 = " + scc1.getStdDeviation());


        System.out.printf("\n2반 학생들의 점수를 출력합니다.");
        scc2.totalMember(21);
        scc2.calcMean();
        System.out.println("\n2 반의 평균은 = " + scc2.getMean());

        scc2.calcVariance();
        System.out.println("2 반의 분산은 = " + scc2.getVariance());

        scc2.calcStdDeviation();
        System.out.println("2 반의 표준편차는 = " + scc2.getStdDeviation());


        System.out.println("\n3반 학생들의 점수를 출력합니다.");
        scc3.totalMember(18);
        scc3.calcMean();
        System.out.println("3 반의 평균은 = " + scc3.getMean());

        scc3.calcVariance();
        System.out.println("3 반의 분산은 = " + scc3.getVariance());

        scc3.calcStdDeviation();
        System.out.println("3 반의 표준편차는 = " + scc1.getStdDeviation());

        if(scc1.getMean() > scc2.getMean() && scc1.getMean() > scc3.getMean()){
            System.out.println("\n1반이 전체 학급의 평균점수가 가장 높습니다.");
        } else if(scc2.getMean() > scc1.getMean() && scc2.getMean() > scc3.getMean()){
            System.out.println("\n2반이 전체 학급의 평균점수가 가장 높습니다.");
        } else if(scc3.getMean() > scc1.getMean() && scc3.getMean() > scc2.getMean()) {
            System.out.println("\n3반이 전체 학급의 평균점수가 가장 높습니다.");
        }

        if(scc1.getStdDeviation() < scc2.getStdDeviation() && scc1.getStdDeviation() < scc3.getStdDeviation()){
            System.out.println("1반이 전체 학급의 표준편차가 가장 낮습니다.");
        } else if(scc2.getStdDeviation() < scc1.getStdDeviation() && scc2.getStdDeviation() < scc3.getStdDeviation()){
            System.out.println("2반이 전체 학급의 표준편차가 가장 낮습니다.");
        } else if(scc3.getStdDeviation() < scc1.getStdDeviation() && scc3.getStdDeviation() < scc2.getStdDeviation()) {
            System.out.println("3반이 전체 학급의 표준편차가 가장 낮습니다.");
        }

        if(scc1.getStdDeviation() > scc2.getStdDeviation() && scc1.getStdDeviation() > scc3.getStdDeviation()){
            System.out.println("1반이 전체 학급의 표준편차가 가장 높습니다.");
        } else if(scc2.getStdDeviation() > scc1.getStdDeviation() && scc2.getStdDeviation() > scc3.getStdDeviation()){
            System.out.println("2반이 전체 학급의 표준편차가 가장 높습니다.");
        } else if(scc3.getStdDeviation() > scc1.getStdDeviation() && scc3.getStdDeviation() > scc2.getStdDeviation()) {
            System.out.println("3반이 전체 학급의 표준편차가 가장 높습니다.");
        }

    }
}
