#include <iostream>
#include <algorithm>
using namespace std;

int main() {
	int n = 10;
	int arr[10] = { 3, 5, 9, 7, 8, 1, 4, 2, 10, 6 };

	sort(arr, arr + n);

	for (int i = 0; i < 10; ++i)
		cout << arr[i] << ' ';

	return 0;
}