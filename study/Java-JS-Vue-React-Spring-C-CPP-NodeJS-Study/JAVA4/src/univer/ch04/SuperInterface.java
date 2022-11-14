package univer.ch04;

interface SuperInterface {
    public void func1();
    public void func2();
}

interface SubInterface extends SuperInterface {
    public void func3();
}
