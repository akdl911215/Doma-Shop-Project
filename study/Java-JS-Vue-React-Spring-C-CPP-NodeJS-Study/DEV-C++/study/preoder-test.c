#include <stdio.h>
#include <stdlib.h>

struct node
{
	int data;
	struct node* left;
	struct node* right;
};

struct node* newNode(int data)
{
	struct node* node = (struct node*)malloc(sizeof(struct node));
	node -> data = data;
	node -> left = NULL;
	node -> right = NULL;
}

void printPreorder(struct node* node)
{
	if (node != NULL) {
		printf("%d", node -> data);
		printPreorder(node -> left);
		printPreorder(node -> right);
	}
}

void main()
{
	struct node* root = newNode(1);
	root -> left = newNode(2);
	root -> right = newNode(3);
	root -> left -> left = newNode(4);
	root -> left -> right = newNode(5);
	
	printf("전위순회로 이진 트리를 탐색하면 : \n");
	printPreorder(root);
	free(root);
}
