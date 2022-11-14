#include <stdio.h>

BinarySearch(A[], Left, Right, x) // 순환 형태로 표현된 이진 탐색
// A[Left..Right] : 탐색 대상 배열. 오름차순으로 정렬되어 있다고 가정
// Left, Right : A에서 x를 찾는 구간
// x : 탐색키

// 출력 : 배열 A에서 x의 위치(탐색이 실패해서 x가 없는 경우 -1)
	{
		if (Left > Right) return -1; // 탐색키가 존재하지 않는 경우
		Mid = ceil(Left + Right / 2);  //ceil 소수점 버리는 함수
		if (x == A[Mid]) return Mid;
		else if (x < A[Mid]) BinarySearch(A, Left, Mid - 1, x); // 왼쪽 부분 배열 탐색
			else BinarySearch(A, Mid + 1, Right, x); // 오른쪽 부분 배열 탐색 
 	}	 
