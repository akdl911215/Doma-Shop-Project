package Eleventh;

class Vehicle{
    private int maximumNum;
    private int speed;
    private int numberOfDrivers;
    private int numberOfWheels;

    public Vehicle(int maximumNum, int speed, int numberOfDrivers, int numberOfWheels) {
        this.maximumNum = maximumNum;
        this.speed = speed;
        this.numberOfDrivers = numberOfDrivers;
        this.numberOfWheels = numberOfWheels;
    }

    public int getMaximumNum() {
        return maximumNum;
    }

    public void setMaximumNum(int maximumNum) {
        this.maximumNum = maximumNum;
    }

    public int getSpeed() {
        return speed;
    }

    public void setSpeed(int speed) {
        this.speed = speed;
    }

    public int getNumberOfDrivers() {
        return numberOfDrivers;
    }

    public void setNumberOfDrivers(int numberOfDrivers) {
        this.numberOfDrivers = numberOfDrivers;
    }

    public int getNumberOfWheels() {
        return numberOfWheels;
    }

    public void setNumberOfWheels(int numberOfWheels) {
        this.numberOfWheels = numberOfWheels;
    }

    @Override
    public String toString() {
        return "Vehicle{" +
                "maximumNum=" + maximumNum +
                ", speed=" + speed +
                ", numberOfDrivers=" + numberOfDrivers +
                ", numberOfWheels=" + numberOfWheels +
                '}';
    }
}

class Car extends Vehicle{
    String brand;
    String country;
    String VehicleType;

    public Car(int maximumNum, int speed, int numberOfDrivers,
               int numberOfWheels, String brand, String country,
               String vehicleType)
    {
        super(maximumNum, speed, numberOfDrivers, numberOfWheels);
        this.brand = brand;
        this.country = country;
        VehicleType = vehicleType;
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

    public String getVehicleType() {
        return VehicleType;
    }

    public void setVehicleType(String vehicleType) {
        VehicleType = vehicleType;
    }

    @Override
    public String toString() {
        return "Car{ maximumNum=" + super.getMaximumNum() + "', speed='" + super.getSpeed() +
                ", numberOfDrivers=" + super.getNumberOfDrivers() + "', numberOfWheels=" +
                super.getNumberOfWheels() +
                ", brand='" + brand + '\'' +
                ", country='" + country + '\'' +
                ", VehicleType='" + VehicleType + '\'' +
                '}';
    }
}

public class EleventhHomework3 {
    public static void main(String[] args) {
        Car c = new Car(8,250,1,4,
                "현대","대한민국", "SUV");
        System.out.println(c);
    }
}
