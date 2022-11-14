#include <stdio.h>

int main() {
	
	int num1 = 10;
	
	// 변수의 메모리 주소를 구할 떄는 변수 앞에 &(주소 연산자)를 붙이면 됨 
	printf("%p\n", &num1);	// num1의 메모리 주소를 출력
							// 컴퓨터마다, 실행할 때 마다 달라짐
							
	printf("%x\n", &num1);
	printf("%X\n", &num1);
							
	return 0; 
}
