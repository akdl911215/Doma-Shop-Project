#include <stdio.h>

int A[] =  {10, 15, 20, 25, 30, 15, 40, 45, 50}

int BinarySearchIterration(A[] , n, x) {
	Left = 0;
	Right = n -1;
	
	while (Left <= Right) {
		Mid = ceil((Left + Right) / 2);
		if (x == A[Mid]) return Mid;
		else if (x < A[Mid]) Right = Mid - 1; 
			else Left = Mid + 1; 
	}
	
//	printf("x = %d", x);
	
	return -1; 
} 

int main(void) {
	
	BinarySearchIterration(A, 9, 15);
	
	return 0;
} 
 
