package univer.ch04.useInterfaceDataType2;

class Triangle6 implements Figure6 {
    private double height, width;

    public Triangle6(double h, double w) {
        height = h;
        width = w;
    }

    @Override
    public double getArea() {
        return height * width * 0.5;
    }

    public double getHeight() {
        return height;
    }

    public double getWidth() {
        return width;
    }
}
