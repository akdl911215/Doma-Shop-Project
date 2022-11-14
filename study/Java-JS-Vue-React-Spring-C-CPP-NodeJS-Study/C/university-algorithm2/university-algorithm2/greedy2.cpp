#include <iostream>
using namespace std;

int main() {

	int M = 10; // 배낭의 무게
	int n = 4; // 물건의 개수
	int p[4] = { 14, 15, 20, 9 }; // 물체 i의 이익
	int w[4] = { 4, 3, 5, 3 }; // 물체 i의 무게
	double result[4]; // 무게 / 이익 로 나눈 결과 (소수점 포함하기 위해서)
	int rangking[4]; // 1kg당 단위 이익이 랭킹 부여
	int x[4]; // 배낭에 들어간 물체 i의 비율

	for (int i = 0; i < n; ++i) {
		result[i] = (double)p[i] / (double)w[i];
		rangking[i] = 0;
		x[i] = 0;
	}

	for (int i = 0; i < n; ++i) {
		int rank = 1;
		for (int j = 0; j < n; ++j) {
			if (result[i] < result[j]) {
				rangking[i] = rank++;
			}
		}
	}

	int r = M;
	int totalBenefit = 0;
	for (int i = 0; i < n; ++i) {
		for (int j = 0; j < n; ++j) {
			if (i == rangking[j]) {
				if (w[j] < r) {
					r -= w[j];
					totalBenefit += p[j];
				}
				else {
					double num = (double) p[j] / (double) w[j];
					totalBenefit += (r * num);
					r -= r;
				}
				if (r == 0) break;
			}
		}
	}

	// 가방에 들어간 최대 이익
	cout << "totalBenefit :: " << totalBenefit << endl;

	return 0;
}