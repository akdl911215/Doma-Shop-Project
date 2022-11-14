BinarySearch_Iterration(A[], n, x) // 반복 형태로 표현된 이진 탐색
// 입력 : A[0..n-1] : 탐색 대상 배열, 오름차순으로 정렬되어 있다고 가정
//		  n : 탐색 대상 원소의 개수(배열의 크기)
//		  x : 탐색키

// 출력 : 배열 A에서 x의 위치(탐색이 실패해서 x가 없는 경우 -1)
{
	Left = 0;
	Right = n -1;
	
	while (Left <= Right) {
		Mid = ceil((Left + Right) / 2);
		if (x == A[Mid]) return Mid;
		else if (x < A[Mid]) Right = Mid - 1; // 왼쪽 부분 배열 탐색
			else Left = Mid + 1; // 오른쪽 부분 배열 탐색 
	}
	
	return -1; // 탐색키가 조재하지 않는 경우 
 } 
