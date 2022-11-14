#include <stdio.h>

int A[] =  {10, 15, 20, 25, 30, 35, 40, 45, 50};

int BinarySearchIterration(int *A, int n, int x) {
	int Left = 0;
	int Right = n - 1;
	int result = 0;
	
	while (Left <= Right) {
		int Mid = (Left + Right) / 2;
		if (x == A[Mid]) {
			result = A[Mid];
			if (result == x) {
				printf("result == %d\n", result);
			}
			return Mid;
		}
		else {
			if (x < A[Mid]) {
				Right = Mid - 1;
				result = A[Right];
				if (result == x) {
					printf("result == %d\n", result);
				}
			} else {
				Left = Mid + 1;
				result =  A[Left];
				if (result == x) {
					printf("result == %d\n", result);
				}
			}
		}
	}
	
	printf("값이 업습니다.");
	return -1; 
} 

int main(void) {
	BinarySearchIterration(A, 9, 15);
	
	return 0;
} 
 

