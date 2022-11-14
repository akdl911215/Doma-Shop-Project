package Eighth;

class Factory{

    float aFactoryOnehourProduct = 10; //a공장 1시간 제품생산
    float bFactoryOnehourProduct = 2.5f; //b공장 1시간 제품생산
    float TotalaFactory = 0, TotalbFactory = 0, TotalTendayProductVolume = 0,
            TotalProductVolumeSubA = 0, afactoryThreeproduct = 0, factoryDivision = 0;

    public void aFactoryOneday(float aFactoryOnehourProduct){ // 하루 총량 240
        this.aFactoryOnehourProduct = aFactoryOnehourProduct;
        TotalaFactory = aFactoryOnehourProduct * 24;
        System.out.printf("A 공장 하루 총 생샹량은 %1.2f 입니다.\n", TotalaFactory);
    }

    public void bFactoryOneday(float bFactoryOnehourProduct){ // 하루 총량 60
        this.bFactoryOnehourProduct = bFactoryOnehourProduct;
        TotalbFactory = bFactoryOnehourProduct * 24;
        System.out.printf("B 공장 하루 총 생샹량은 %1.2f 입니다.\n", TotalbFactory);
    }


    public void TotalTendayProduct(){ // a + b = 10일 전체 생산량 3000
           TotalTendayProductVolume = (TotalaFactory + TotalbFactory) * 10;
        System.out.printf("A + B  공장 10 일 생샹량은 %1.2f 입니다.\n", TotalTendayProductVolume);
    }

    public void TotalProductSubA(){ // total - a*3 모자란 생상량
        TotalProductVolumeSubA = TotalTendayProductVolume - (TotalaFactory * 3);
        System.out.printf("A + B  공장 총 생샹량 - A공장 3일치 생산량은 %1.2f 입니다.\n", TotalProductVolumeSubA);
    }

    public void afactoryThreeproduct(){ // a공장 * 3 총
        afactoryThreeproduct = TotalaFactory * 3;
        System.out.printf("A 3일치 생산량은 %1.2f 입니다.\n", afactoryThreeproduct);
    }

    public void factoryDivision(int orderNum){ // 몇일이 걸리냐를 원하면 (a생산량 * n일) / 총생산량
        factoryDivision = (TotalaFactory * orderNum) / (TotalaFactory + TotalbFactory);
        System.out.printf("A 공장 %d 일의 사고로 인해 츨고 지연날짜는 %1.2f 일 입니다.", orderNum, factoryDivision);
    }

}
public class EightHomeWork12 {
    public static void main(String[] args) {
        //12) A 공장의 생산량은 10 시간에 100개 > 1시간에 10개 > 하루 240개
        //    B 공장의 생산량은 20 시간에 50개다. > 1시간에 2.5 > 하루 60
        //    10일간 A 공장과 B 공장이 풀 가동해야 완성되는 수량이 있다 가정한다. > 10일간 1000개를 만들어야한다.
        //    어느날 A 공장에 불이나서 3일간 공장이 가동 정지를 했다.
        //    그렇다면 이들은 몇 일 후에 제품을 납품할 수 있을까 ? > 답 = 3일 후

        // a공장은 1시간 10개 b공장은 1시간 2.5개 생산 프로그래밍한다.
        Factory ft = new Factory();
        ft.aFactoryOneday(10);
        ft.bFactoryOneday(2.5f);
        ft.factoryDivision(3);
    }
}
