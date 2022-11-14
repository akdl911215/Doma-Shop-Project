#define MAX_ELEMENT 200 // 힙 안에 저장된 요소의 개수

typedef struct
{
	int key;
} element;

typedef struct 
{
	int heap[MAX_ELEMENT];
	int heap_size;
} HeapType;

HeapType heap1;

// 현재 요소의 개수가 heap_size인 힙 h에 item을 삽입한다.
// 최대 힙(max heap) 삽입 함수
void insert_max_heap(HeapType *h, element item) 
{
	int i;
	i = ++(h->heap_size); // 힙 크기를 하나 증가
	
	// 트리를 거슬러 올라가면서 부모 노드와 비교하는 과정
	// i가 루트 노드(index: 1)이 아니고, 삽입할 item의 값이 i의 부모 노드(index: i/2)보다 크면
	while ((i != 1) && (item.key > h->heap[i/2].key))
	{
		// i 번째 노드와 부모 노드를 교환한다.
		h->heap[i] = h->heap[i/2];
		// 한 레벨 위로 올라간다.
		i /= 2; 
	}
	h->heap[i] = item; // 새로운 노드를 삽입 
 } 
