#define _CRT_SECURE_NO_WARINGS  // strcpy 보안 경고로 인한 컴파일 에러 방지
#include <stdio.h>
#include <string.h> // strcpy 함수가 선언된 헤더 파일

struct Person { // 구조체 정의 
	char name[20]; 		// 구조체 멤버 1
	int age;	   		// 구조체 멤버 2
	char address[100];	// 구조체 멤버 3	
}; 

struct Person2 {
	char name[20];
	int age;
	char address[100];
} p2;

int main() {
	
	struct Person p1;	// 구조체 변수 선언
	struct Person p3 = {
		.name = "코끼리", .age = 32, .address = "서울역 1번출구"
	};
	
	
	// 점으로 구조체 멤버에 접근하여 값 할당
	strcpy(p1.name, "홍길동");
	p1.age = 30;
	strcpy(p1.address, "서울역 11번출구");
	
	strcpy(p2.name, "이정현");
	p2.age = 31;
	strcpy(p2.address, "서울역 12번출구");
	
	// 점으로 구조체 멤버에 접근하여 값 출력 
	printf("이름: %s\n", p1.name);	   // 이름 : 홍길동 
	printf("나이: %d\n", p1.age);	   // 나이 : 30
	printf("주소: %s\n", p1.address);  //주소 : 서울역 11번 출구 
	
	printf("\n이름: %s\n", p2.name);	   // 이름 : 이정현 
	printf("나이: %d\n", p2.age);	   // 나이 : 31
	printf("주소: %s\n", p2.address);  //주소 : 서울역 12번 출구 

	printf("\n이름: %s\n", p3.name);	   // 이름 : 코끼리 
	printf("나이: %d\n", p3.age);	   // 나이 : 32
	printf("주소: %s\n", p3.address);  //주소 : 서울역 1번 출구 
	
} 
