#include <stdio.h>

int main() {
	int *numPtr; // 포인터 변수 선언
	int num1 = 10; // int형 변수를 선언하고 10저장
	
	numPtr = &num1; // num1의 메모리 주소를 포인터 변수에 저장
	
	printf("%p\n", numPtr); 
	printf("%p\n", &num1);
}
