#include <iostream>
using namespace std;

int main(void) {

	int T = 620, n =4;
	int C[3];
	int X[3];

	for (int i = 0; i < n; ++i) {
		X[i] = T / C[i];
		T = T - C[i] * X[i];
	}

	for (int i = 0; i < n; ++i) {
		cout << X[i] << endl;
	}

	return 0;
}