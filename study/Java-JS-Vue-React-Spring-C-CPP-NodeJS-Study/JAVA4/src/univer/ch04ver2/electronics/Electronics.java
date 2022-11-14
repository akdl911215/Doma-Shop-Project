package univer.ch04ver2.electronics;

public class Electronics {
    private int nVoltage = 0;
    public void turnOn(int nInputVotage) {
        nVoltage = nInputVotage;
    }
    public void turnOff() {
        nVoltage = 0;
    }
    public int getnVoltage() {
        return nVoltage;
    }
}
