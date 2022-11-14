const book = ['Reasons and Persons', 'Derek Parfit', 19.99];
function formatBook(title, author, price) {
    return `${title} by ${author} $${price}`;
}
console.log('book : ', book);
console.log('formatBook : ', formatBook(book[0], book[1], book[2]));
// 매개변수는 인수의 목록이므로 펼침 연산자를 이용하면 배열을 인수 목록으로 빠르고 쉽게 변환 할 수 있음
console.log('formatBook : ', formatBook(...book));
