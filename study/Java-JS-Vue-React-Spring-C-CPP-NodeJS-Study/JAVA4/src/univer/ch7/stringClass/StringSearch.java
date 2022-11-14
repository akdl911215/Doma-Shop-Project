package univer.ch7.stringClass;

public class StringSearch {
    public static void main(String[] args) {

        // 문자열 검색을 위한 메소드

        String szStr1 = "오늘 박찬호 선수의 피칭은 거의 완벽에 가까웠다. " +
                "홈 개막전이 벌어진 12일 선수 소개 때 관중들로부터 유일하게 " +
                "야유를 받았던 박찬호가 이날 기립박수를 받으며 마운드를 내려갔다.";
        int nStrIndex = -1;

        do {
            nStrIndex = szStr1.indexOf("박찬호", nStrIndex + 1);
            if (nStrIndex >= 0) System.out.println(nStrIndex + ", ");
        } while(nStrIndex >= 0);

        System.out.println("");

        nStrIndex = szStr1.length();
        do {
            nStrIndex = szStr1.lastIndexOf("박찬호", nStrIndex - 1);
            if (nStrIndex >= 0) System.out.println(nStrIndex + ", ");
        } while (nStrIndex >= 0);
    }
}
