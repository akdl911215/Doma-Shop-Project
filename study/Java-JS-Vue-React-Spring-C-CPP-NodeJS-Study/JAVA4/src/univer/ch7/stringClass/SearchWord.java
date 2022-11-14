package univer.ch7.stringClass;

public class SearchWord {
    public static void main(String[] args) {

        // 원하는 다어 추출
        String szStr1 = "오늘 박찬호 선수의 과정은 거의 완벽에 가까웠다. " +
                "홈 개막전이 벌어진 12일 선수 소개 때 관중들로부터 유일하게 " +
                "야유를 받았던 박찬호가 이날 기립박수를 받으며 마운드를 내려갔다.";

        String szFirstWord, szLastWord;
        szFirstWord = szStr1.substring(0, szStr1.indexOf(' '));
        szLastWord = szStr1.substring(szStr1.lastIndexOf(' ') + 1, szStr1.length());

        System.out.println("처음 단어 : " + szFirstWord);
        System.out.println("마지막 단어 : " + szLastWord);
    }
}
