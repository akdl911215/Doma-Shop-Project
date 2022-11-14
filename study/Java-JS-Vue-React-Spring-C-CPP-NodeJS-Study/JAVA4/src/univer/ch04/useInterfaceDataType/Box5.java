package univer.ch04.useInterfaceDataType;


class Box5 implements Figure5 {

    private double height, width;
    public Box5(double h, double w) {
        height = h;
        width = w;
    }

    @Override
    public double getArea() {
        return height * width;
    }
}
