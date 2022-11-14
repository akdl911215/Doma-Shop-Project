#define _CRT_SECURE_NO_WARNINGS
#include <stdio.h>
#include <string.h>

typedef struct {
	char name[20];
	int age;
	char address[100];
} Person;

int main() {
	Person p1;
	
	strcpy(p1.name, "우주");
	p1.age = 10;
	strcpy(p1.address, "중랑구 상봉동 134-8");
	
	printf("이름 : %s\n", p1.name);
	printf("나이 : %d\n", p1.age);
	printf("주소 : %s\n", p1.address); 
}
