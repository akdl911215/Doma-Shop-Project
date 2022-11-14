const num = (number) => {
    return number + number;
};
const numInput = num;

const sumCounter = (numInput) => {
    let number = 0;
    console.log('numInput : ', numInput);
    console.log('number : ', number);

    return function () {
        number = numInput(number);
        return number;
    };
};

const numberOutput = sumCounter(numInput.num);
console.log('numberOutput : ', numberOutput());
console.dir(num);
