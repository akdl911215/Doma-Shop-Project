function a() {}
console.log('a = ', a.length); // 0

function b(x) {
    return x;
}
console.log('b = ', b.length); // 1

function c(x, y) {
    return x + y;
}
console.log('c = ', c.length); // 2

function d(x, y, z) {
    return (x * y) % z;
}
console.log('d = ', d.length); // 3
