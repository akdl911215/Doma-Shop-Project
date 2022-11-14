#include <stdio.h>
#include <stdlib.h>

struct NODE // 구조체 선언
{
	struct NODE* llink; 
	int data;
	struct NODE* rlink;
};
struct NODE* head;
struct NODE* tail;

// 노드 생성 함수
struct NODE* makenode(int value)
{
	struct NODE *node = (struct NODE*)malloc(sizeof(struct NODE));
	node->llink = NULL;
	node->data = value;
	node->rlink = NULL;
	return node;
} 
 
// 출력 함수
void init()
{
	head = (struct NODE*)malloc(sizeof(struct NODE));
	tail = (struct NODE*)malloc(sizeof(struct NODE));
	head->data = 0;
	tail->data = 0;
	
	head->rlink = tail;
	head->llink = head;
	tail->rlink = tail;
	tail->llink = head;
} 

// 뒤로부터 노드 추가하는 함수
void push_back(int value)
{
	struct NODE* newnode = makenode(value);
	struct NODE* p;
	p = tail;
	p->llink->rlink = newnode;
	newnode->llink = p->llink;
	p->llink = newnode;
	newnode->rlink = p;
} 

// main 함수
int main()
{
	init(); // head, tail 초기화
	push_back(10); 
	push_back(20);
	push_back(30);
	print();
	
	return 0;
 } 
