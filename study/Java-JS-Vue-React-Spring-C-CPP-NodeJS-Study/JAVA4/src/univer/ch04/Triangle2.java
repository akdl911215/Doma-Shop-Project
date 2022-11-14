package univer.ch04;

class Triangle2 implements Figure {
    private double height, width;
    public Triangle2(double h, double w) {height = h; width = w;}
    public double getArea() {return height * width * 0.5;}
}
