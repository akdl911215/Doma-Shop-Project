package Ninth;

class Factory {
    double outputA, outputB;
    int totalDays, stopDays, totalProduction;

    public Factory(int totalDays, int stopDays) {
        outputA = 100 / (double)10;
        outputB = 50 / (double)20;
        System.out.printf("A 공장 시간 당 생산량 : %.2f개\n", outputA);
        System.out.printf("B 공장 시간 당 생산량 : %.2f개\n", outputB);

        this.totalDays = totalDays;
        this.stopDays = stopDays;

        totalProduction = (int)((outputA + outputB) * 24 * totalDays);
        System.out.printf("A, B 공장 풀가동 시 %d일 간 총 생산량 : %d개\n", totalDays, totalProduction);
    }

    public void calcChangedDays() {
        while(true) {
            if (totalProduction <= (int) (outputA * 24 * (totalDays - stopDays) + outputB * 24 * totalDays)) {
                break;
            }
            totalDays++;
        }

        System.out.printf("A 공장 %d일 간 가동 중단 시 납품까지 총 소요 일수 : %d일\n", stopDays, totalDays);
    }
}


public class EightHomework12 {
    public static void main(String[] args) {
        // 12) A 공장의 생산량은 10시간에 100개
        //     B 공장의 생산량은 20시간에 50개다.
        //     10일 간 A 공장과 B 공장이 풀가동 해야 완성되는 수량이 있다 가정한다.
        //     어느날 A 공장에 불이 나서 3일 간 공장이 가동 정지를 했다.
        //     그렇다면 이들은 몇 일 후에 제품을 납품할 수 있을까 ?
        Factory fac = new Factory(10, 3);

        fac.calcChangedDays();
    }
}
