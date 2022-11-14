#include <stdio.h>

int main()
{
	int i, sum = 0;
	for (i = 1; i <= 10; i++) {
		if (i % 2 && i % 3) continue;
		sum += i;
		printf("i = %d\n", i);
		printf("sum = %d\n", sum);
	}
	printf("%d\n", sum);
	return 0;
}