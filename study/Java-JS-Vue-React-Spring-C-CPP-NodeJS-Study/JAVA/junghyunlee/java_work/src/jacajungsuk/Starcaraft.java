package jacajungsuk;

public class Starcaraft {
    public static void main(String[] args) {
        // 객체 생성
        Marine marine = new Marine("마린", 80);
        Medic medic = new Medic("메딕", 60);

        // 마린 스팀팩 버프~
        marine.stimpack();

        // 메딕의 치료 -> 마린
        medic.heal(marine);
    }
}

// 마린 클래스
class Marine {
    // 필드
    String name;
    int hp;

    // 생성자
    public Marine(String name, int hp) {
        this.name = name;
        this.hp = hp;
    }

    // 메소드
    public void stimpack() {
        for(int i = 0; i < (int)(Math.random() * 5) + 1; i ++) {
            System.out.printf("[%s]의 스팀팩! hp: %d -> ", name, hp);
            hp -= 10;
            System.out.printf("%d\n", hp);
        }
    }
}

// 메딕 클래스
class Medic {
    // 필드
     String name;
     int hp;

     // 생성자
    public Medic(String name, int hp) {
        this.name = name;
        this.hp = hp;
    }

    // 메소드
    public void heal(Marine target) {
        for(int i = 0; i < (int)(Math.random() * 5) + 1; i ++) {
            System.out.printf("[%s]의 치유! %s HP(%d -> ", name, target.name, target.hp);
            target.hp += 10;
            System.out.printf("%d)\n", target.hp);
        }
    }
}