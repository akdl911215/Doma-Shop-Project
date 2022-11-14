#include <stdio.h>
#include <stdlib.h>

struct KNode {
	struct Knode *left;
	char key[10];
	int info;
	struct KNode *right;
};

int main(){
	struct KNode kn;
	
		strcpy(kn.key, "1");
		kn.info = 1;


	
	Inorder(kn);
	return 0;
}

void Inorder(struct KNode *rootptr) {
		if(rootptr != NULL) {
			Inorder(rootptr -> left);
			printf("%d", rootptr->info info);
			Inorder(rootptr -> right);
		}
	}
