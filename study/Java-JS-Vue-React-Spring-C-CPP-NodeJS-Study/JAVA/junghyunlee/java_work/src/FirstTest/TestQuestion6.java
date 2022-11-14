package FirstTest;

// 전자제품 특성
// 1. 전원을 껐다 켰다 할수 있다.
// 2. 220v를 사용한다.
class Electronics {
    private int electricCurrent;
    private String powerOnOff;
    private String color;

    public Electronics(int electricCurrent,
                       String powerOnOff, String color){
        this.electricCurrent = electricCurrent;
        this.powerOnOff = powerOnOff;
        this.color = color;
    }



    public int getElectricCurrent() {
        return electricCurrent;
    }

    public void setElectricCurrent(int electricCurrent) {
        this.electricCurrent = electricCurrent;
    }


    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getPowerOnOff() {
        return powerOnOff;
    }

    public void setPowerOnOff(String powerOnOff) {
        this.powerOnOff = powerOnOff;
    }

    @Override
    public String toString() {
        return "Electronics{" +
                "electricCurrent=" + electricCurrent +
                ", powerOnOff='" + powerOnOff + '\'' +
                ", color='" + color + '\'' +
                '}';
    }
}

class cellphone extends Electronics {
    private String brand;
    private String country;

    public cellphone( int electricCurrent,
                     String powerOnOff, String color, String brand, String country){
        super( electricCurrent, powerOnOff, color);
        this.brand = brand;
        this.country = country;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    @Override
    public String toString() {
        return "cellphone{ electricCurrent = " + super.getElectricCurrent() +
                ", powerOnOff = " + super.getPowerOnOff() + ", color = " +
                super.getColor() +
                ", brand ='" + brand + '\'' +
                ", country ='" + country + '\'' +
                '}';
    }
}

public class TestQuestion6 {
    public static void main(String[] args) {
        cellphone cp = new cellphone(220, "on" , "White",
                "삼성", "대한민국");
        System.out.println(cp);
    }
}
