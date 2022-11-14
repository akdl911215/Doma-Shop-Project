#include<iostream>
using namespace std;

int main() {

	int M = 10; // 배낭의 무게
	int n = 4; // 물건의 갯수
	int p[4] = { 14, 15, 20, 9 }; // 물체 i의 이익
	int w[4] = { 4, 3, 5, 3 }; // 물체 i의 무게
	double result[4];
	int rangking[4];
	int x[4];// 배낭에 들어간 물체 i의 비율
	

	for (int i = 0; i < n; ++i) {
		result[i] = (double)p[i] / (double)w[i];
		cout << result[i] << endl;
		rangking[i] = 0;
		x[i] = 0;
	}

	for (int i = 0; i < n; ++i) {
		int rank = 1;
		for (int j = 0; j < n; ++j) {
			if (result[i] > result[j]) {
				rangking[i] = rank++;
			}
		} 
	}

	for (int i = 0; i < n; ++i)
		cout << rangking[i] << " ";

	cout << endl;
	int r = M;
	int totalBenefit = 0;

	cout << "n : " << n << endl;
	for (int i = 1; i <= n; ++i) {
		for (int j = 1; j <= n; ++j) {
			printf("for rangking[%d] : %d\n", j, rangking[j]);
			//cout << "for rangking[j] : " << rangking[j] << endl;
			if (i == rangking[j]) {
				cout << "if rangking[j] : " << rangking[j] << endl;
				if (w[j] < r) {
					cout << "j ::: " << j << endl;
					cout << "w[j] :: " << w[j] << endl;
					r -= w[j];
					totalBenefit += p[j];
					cout << "r : " << r << endl;
					cout << "totalBenefit : " << totalBenefit << endl;
				} 
				else {
					int num = p[j] / w[j];
					cout << "num :: " << num << endl;
					totalBenefit = totalBenefit + (r * num);
					cout << "totalBenefit :: " << totalBenefit << endl;
	
				}
			
			}
			
		}
	}

	cout << endl;
	cout << "totalBenefit : " << totalBenefit;

	return 0;
}