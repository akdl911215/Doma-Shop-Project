let a = "";

const parameter = (foo) => {
  return foo ? true : false;
};

console.log(parameter());

const parameter2 = (foo) => (foo ? true : false);
console.log(parameter2());
