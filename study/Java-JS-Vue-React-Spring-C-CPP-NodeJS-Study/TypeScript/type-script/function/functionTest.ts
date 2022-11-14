const name: string = "LJH";
const money: number = 1234;

test(name, money);
function test(name: string, money: number): number {
  console.log("들어온다");
  console.log("name : ", typeof name);
  console.log("money : ", typeof money);

  return 0;
}

console.log("");

test(name, money);
function test2(name: string, money: number): void {
  console.log("들어온다");
  console.log("name : ", typeof name);
  console.log("money : ", typeof money);
}

console.log("");

const tmp = test3(name);
function test3(name: string, money: number = 123): string {
  console.log("들어온다");
  console.log("name : ", typeof name);
  console.log("money : ", typeof money);
  console.log("money : ", money);

  return "Success";
}
console.log("tmp : ", tmp);

console.log("");

test4(name);
function test4(name: string, money?: number): void {
  console.log("들어온다");

  console.log("name : ", typeof name);
  if (money) console.log("money : ", typeof money);
  else console.log("moeny 없뜸");
}
