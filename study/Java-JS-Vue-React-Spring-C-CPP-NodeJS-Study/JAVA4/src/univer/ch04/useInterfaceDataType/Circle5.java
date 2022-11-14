package univer.ch04.useInterfaceDataType;


class Circle5 implements Figure5 {

    private double radius;
    public Circle5(double r) {
        radius = r;
    }

    @Override
    public double getArea() {
        return radius * radius * 3.11592;
    }
}
