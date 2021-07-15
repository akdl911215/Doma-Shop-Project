var btnNew = document.getElementById('btnAdd');
btnNew.onclick = addNewItem;

function addNewItem() {
    var listItem = document.createElement('li');
    // document.createElement()는 tagName의 HTML 요소를 만들어 반환
    console.log('listItem : ', listItem);
    listItem.innerText = 'Hello';

    var list = document.getElementById('todolist');
    // document.getElementById()는 주어진 문자열과 일치하는 id속성을 가진
    // 요소를 찾고,이를 나타내는 Element 객체를 반환
    console.log('list : ', list);
    list.appendChild(listItem);
    // Node.appendChild()는 한 노드를 특정 부모 노드의 자식 노드 리스트 중
    // 마지막 자식으로 붙인다. 
}
