interface nameObject {
  firstName: string;
  lastName: string | null;
}

let obj: nameObject = {
  firstName: "LEE",
  //   lastName: null,
  lastName: "JungHyun",
};

console.log(obj.lastName!.toString());
