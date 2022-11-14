#include <iostream>
#include <algorithm>
using namespace std;


int main() {

	int M; // 배낭의 용량
	cout << "배낭의 용량 = ";
	cin >> M;
	int n; // 물체의 갯수
	cout << "물체의 갯수 = ";
	cin >> n;
	int* p = new int[n]; // 물체 i의 이익
	int* w = new int[n]; // 물체 i의 무게
	int* x = new int[n]; // 배낭에 들어간 물체 i의 비율
	double* mp = new double[n]; // 물체 i의 최대 이익

	for (int i = 0; i < n; ++i) x[i] = 0;
	for (int i = 0; i < n; ++i) {
		printf("w[%d] = ", i);
		cin >> w[i];
	}
	for (int i = 0; i < n; ++i) {
		printf("p[%d] = ", i);
		cin >> p[i];
	}
	for (int i = 0; i < n; ++i) {
		mp[i] = (double) p[i] / (double) w[i];
	}

	sort(mp, mp + n);
	
	for (int i = 0; i < n - 1; ++i) {
		cout << mp[i] << " ";
	}

	

	int remaining = M; // remaining = 남은 배낭의 용량
	for (int i = 0; i < n; ++i)
	{
		if (w[i] <= remaining) {
			x[i] = 1;
			remaining -= w[i];
		}
		else break;
		if (i < n) x[i] /= remaining;

	}
	return 0;
}