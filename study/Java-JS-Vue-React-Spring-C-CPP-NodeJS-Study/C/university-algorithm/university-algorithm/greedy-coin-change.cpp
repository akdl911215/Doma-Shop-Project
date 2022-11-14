#include <iostream>
using namespace std;

int main() {

	int T; // 고객에게 돌려줄 거스름돈
	cout << "돌려줘야하는 거스름돈 = ";
	cin >> T;
	int n; // 동전의 종류 갯수
	cout << "동전의 종류 갯수 : ";
	cin >> n;
	int* COIN = new int[n]; // 동전의 액면가를 감소순으로 저장하고 있는 배열
	int* X = new int[n]; // 거스름돈으로 돌려줄 i번째 동전의 개수


	for (int i = 0; i < n; ++i) cin >> COIN[i];

	for (int i = 0; i < n; ++i) {
		X[i] = T / COIN[i];
		T = T - COIN[i] * X[i];
		cout << X[i] << " ";
	}

	delete[] COIN;
	return 0;
}