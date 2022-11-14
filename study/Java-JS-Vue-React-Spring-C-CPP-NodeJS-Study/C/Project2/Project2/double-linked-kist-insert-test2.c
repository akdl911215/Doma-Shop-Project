#include <stdio.h>
#include <stdlib.h>

struct NODE // ����ü ����
{
	struct NODE* llink;
	int data;
	struct NODE* rlink;
};
struct NODE* head;
struct NODE* tail;

// ��� ���� �Լ�
struct NODE* makenode(int value)
{
	struct NODE* node = (struct NODE*)malloc(sizeof(struct NODE));
	node->llink = NULL;
	if (node->llink == NULL) return -1;
	
	node->data = value;
	node->rlink = NULL;
	if (node->rlink == NULL) return -1;
	return node;
}

// ��� �Լ�
void init()
{
	head = (struct NODE*)malloc(sizeof(struct NODE));
	tail = (struct NODE*)malloc(sizeof(struct NODE));
	head->data = 0;
	if (head->data == NULL) return -1;

	tail->data = 0;
	if (tail->data == NULL) return -1;

	head->rlink = tail;
	head->llink = head;
	tail->rlink = tail;
	tail->llink = head;
}

// �ڷκ��� ��� �߰��ϴ� �Լ�
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

// main �Լ�
int main()
{
	init(); // head, tail �ʱ�ȭ
	push_back(10);
	push_back(20);
	push_back(30);
	print();

	return 0;
}