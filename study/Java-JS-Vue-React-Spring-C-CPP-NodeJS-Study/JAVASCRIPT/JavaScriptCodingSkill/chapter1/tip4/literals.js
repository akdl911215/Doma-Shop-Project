function greet(name) {
    return `Hi, ${name}`;
}
console.log(greet('Leo'));

function yell(name) {
    return `HI, ${name.toUpperCase()}`;
}
console.log(yell('Pankaj'));

function yell2(name) {
    return `HI, ${name.toLowerCase()}`;
}
console.log(yell2('Pankaj'));

function leapYearConverter(age) {
    // Math.floor() : 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
    return `윤년에 태어났다면 ${Math.floor(age / 4)}살이야.`;
}
console.log(leapYearConverter(34));
