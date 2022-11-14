#include <iostream>

using namespace std;

int arr[] = {30, 45, 20, 15, 40, 25, 35, 10};
int n = 8, temp = 0, result = 0;

// 입력 : arr[0..n-1] : 분할하려는 배열
//        n : 배열 A의 원소의 개수
// 출력 : Right : 분할 후 피벗이 위치한 인덱스
void Partition(int i, int j) {
	if ( i >= j) {
		return;
	}
	int pivot = arr[(i + j)/2];
	int Left = i; 
	int Right = j;
	while (Left <= Right) {
		// 피벗 A[0]보다 큰 값을 찾음
		while (arr[Left] < pivot) Left++;
		
		// 피벗보다 작은 값을 찾음
		while (arr[Right] > pivot) Right--;
		
		if (Left <= Right) {
			temp = arr[Left];
			arr[Left] = arr[Right];
			arr[Right] = temp;
			
			Left++; Right--;
		} 
//		else {
//			temp = arr[0];
//			arr[0] = arr[Right];
//			arr[Right] = temp;
//		}	
		
		Partition(i, Right);
		Partition(Left, j);
	}
}

int main(void) {
	
	Partition(0, n - 1);	
	
	cout << "정렬된 배열 = "; 
	for (int i = 0; i < n; i++) {
		cout << arr[i] << " ";
	}
	
	return 0;
}
