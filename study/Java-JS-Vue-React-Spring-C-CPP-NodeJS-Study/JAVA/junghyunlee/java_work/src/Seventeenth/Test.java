package Seventeenth;

public class Test {
    public static void main(String[] args){ //void: 이 함수의 리턴값이 없다.
        int[] balls=new int[45]; //[0]~[44] 45개
        //1~45 숫자를 초기화
        for(int i=0;i<balls.length;i++){
            balls[i]=i+1;
        }

        //shuffle
        for(int j=0;j<10000;j++){
            int ran=(int)(Math.random()*45);
            int temp=balls[0];
            balls[0]=balls[ran];
            balls[ran]=temp;
        }

        //6개의 새로운 배열 생성
        int[] result = new int[6];
        for(int k=0;k<6;k++){
            result[k]=balls[k];
        }

        //result 배열을 오름차순 정렬
        for(int a=0;a<result.length-1;a++){
            for(int b=(a+1);b<result.length;b++){
                if(result[a]>result[b]){
                    int temp = result[a];
                    result[a] =  result[b];
                    result[b] = temp;
                }
            }
        }
        for(int ball:result){
            System.out.println(ball+"");
        }
    }

}
