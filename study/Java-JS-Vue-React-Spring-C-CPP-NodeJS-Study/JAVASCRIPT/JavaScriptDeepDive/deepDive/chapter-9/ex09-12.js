// 단축평가 사용법 1.
// 객체를 가리키기를 기대하는 변수가 null 또는 undefined가 아닌지 확인하고 프로퍼티를 참조할 때

// var elisiroom = null;

// var value = elisiroom.value;
// console.log(typeof value, value);

var elisiroom = null;
// elisiroom이 null 이나 undefined와 같은 Falsy 값이면 elisiroom으로 평가되고
// elisiroom이 Truthy 값이면 elisiroom.value로  평가된다.

var value = elisiroom && elisiroom.value;
console.log('value값 : ', typeof value, value); // object null
