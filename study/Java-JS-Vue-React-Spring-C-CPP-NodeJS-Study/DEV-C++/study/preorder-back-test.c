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
		printPreorder(node -> left);
		printPreorder(node -> right);
		printf("%d", node -> data);
	}
}

void main()
{
	struct node* root = newNode(1);
	root -> left = newNode(2);
	root -> right = newNode(3);
//	root -> left -> left = newNode(4);
//	root -> left -> right = newNode(5);
	root -> right -> left = newNode(6);
	
	printf("후위순회로 이진 트리를 탐색 : \n");
	printPreorder(root);
	free(root);
}
