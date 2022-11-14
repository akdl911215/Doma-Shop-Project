package univer.ch7.input;

public class ArrayCopy {
    public static void main(String[] args) {
        int nSrc[] =  {1, 2, 3, 4, 5};
        int nTar[] = new int[nSrc.length];
        System.arraycopy(nSrc, 0, nTar, 0, nSrc.length);

        for (int i = 0; i < nSrc.length; ++i) System.out.print(nSrc[i]);
        System.out.println();
        System.out.println();
        for (int i = 0; i < nSrc.length; ++i) System.out.print(nTar[i]);
    }
}
