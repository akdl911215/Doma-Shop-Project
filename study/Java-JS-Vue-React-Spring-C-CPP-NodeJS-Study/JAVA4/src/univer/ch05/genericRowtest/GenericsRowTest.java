package univer.ch05.genericRowtest;

class RowData<T> {
    private T t;
    public RowData(T t) {
        this.t = t;
    }
    public void rowSet(T t) {
        this.t = t;
    }
    public T rowGet() {
        return t;
    }
}

public class GenericsRowTest {
    public static void main(String[] args) {
        RowData data = new RowData("hello");
        System.out.println(data.rowGet());
    }
}
