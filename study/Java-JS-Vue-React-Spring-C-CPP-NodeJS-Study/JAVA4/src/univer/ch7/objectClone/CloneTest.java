package univer.ch7.objectClone;

class Box implements Cloneable {
    private int width, height;
    public Box(int w, int h) {
        width = w;
        height = h;
    }

    public int width() {
        return width;
    }

    public int height() {
        return height;
    }

    public Object clone() {
        try {
            return super.clone();
        } catch (CloneNotSupportedException e) {
            return null;
        }
    }
}

public class CloneTest {
    public static void main(String[] args) {
        Box b1 = new Box(20, 30);
        Box b2 = (Box) b1.clone();
        System.out.println(b2.width()); // 20
        System.out.println(b2.height()); // 30

        System.out.println(b1.height() == b2.height()); // true
    }
}
