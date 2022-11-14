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
	
	return node;
}

void printInorder(struct node* node)
{
//	if (node == NULL) return;
	if (node != NULL) {
		printInorder(node -> left);
		printf("%d", node -> data);
		printInorder(node -> right);
	}

}

void main() 
{
	struct node* root = newNode(1);
	root -> left = newNode(2);
	root -> right = newNode(3);
	root -> left -> left = newNode(4);
	root -> left -> right = newNode(5);
	root -> right -> left = newNode(6);
	root -> right -> right = newNode(7);
	
	printf("중위순회로 이진 트리 탐색 : \n");
	printInorder(root);
	free(root);
}
