package univer.ch7.stringClass;

public class SubSring {
    public static void main(String[] args) {

        // 문자열 추출을 위한 메소드

        String szStr1 = "오늘 박찬호 선수의 과정은 거의 완벽에 가까웠다. " +
                "홈 개막전이 벌어진 12일 선수 소개 때 관중들로부터 유일하게 " +
                "야유를 받았던 박찬호가 이날 기립박수를 받으며 마운드를 내려갔다.";

        for (int i = 0; i < szStr1.length(); ++i) {
            char ch = szStr1.charAt(i);
            if (ch == ' ') System.out.print("_");
            else System.out.print(ch);
        }
        // 오늘_박찬호_선수의_과정은_거의_완벽에_가까웠다._홈_개막전이_벌어진_12일_선수_소개_때_관중들로부터_유일하게_야유를_받았던_박찬호가_이날_기립박수를_받으며_마운드를_내려갔다.
    }
}
