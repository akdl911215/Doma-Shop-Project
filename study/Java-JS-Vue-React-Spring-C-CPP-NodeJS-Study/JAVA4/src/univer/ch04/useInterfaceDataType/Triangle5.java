package univer.ch04.useInterfaceDataType;

class Triangle5 implements Figure5 {
    private double height, width;

    public Triangle5(double h, double w) {
        height = h;
        width = w;
    }

    @Override
    public double getArea() {
        return height * width * 0.5;
    }

}
