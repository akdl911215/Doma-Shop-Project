package univer.ch04.useInterfaceDataType;

public class InterfaceTest5 {
    public static void main(String[] args) {
        Figure5 figure1, figure2, figure3;

        figure1 = new Triangle5(3.0 , 4.0);
        System.out.println(figure1.getArea());

        figure2 = new Box5(3.0, 4.0);
        System.out.println(figure2.getArea());

        figure3 = new Circle5(3.0);
        System.out.println(figure3.getArea());
    }
}
