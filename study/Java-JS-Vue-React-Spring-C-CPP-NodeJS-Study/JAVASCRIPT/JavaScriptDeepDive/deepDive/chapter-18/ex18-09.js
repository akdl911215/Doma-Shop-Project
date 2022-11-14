function a(func) {
    return func();
}

function b() {
    return 'caller : ' + b.caller;
}

console.log(a(b));
console.log(b());
