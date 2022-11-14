package test220111.anonymous;

public class Anonymous {
    public static void main(String[] args) {

        Rectangle a = new Rectangle();

        // 익명 객체1
        Rectangle anonymous1 = new Rectangle() {

            @Override
            int get() {
//                return super.get();
                return width;
            }
        };

        System.out.println(a.get());
        System.out.println(anonymous1.get());
        System.out.println(anonymous2.get());
    }

    // 익명 객체 2
    static Rectangle anonymous2 = new Rectangle() {

        int depth = 30;

        @Override
        int get() {
            return width * height * depth;
        }
    };
}

class Rectangle {

    int width = 10;
    int height = 20;

    int get() {
        return height;
    }
}
