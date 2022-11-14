const { AsyncResource } = require("async_hooks");
const path = require("path");

const string = __filename;

console.log("path.sep : ", path.sep); // 경로의 구분자. Windows는 \, POSIX는 /
console.log("path.delimiter : ", path.delimiter); // 환경 변수의 구분자. process.env.PATH를 입력하면 여러 개의 경로가 이 구분자로 구분되어 있다. Windows는 세미콜론(;)이고 POSIX는 콜론(:)
console.log("---------------------------------");
console.log("path.dirname() : ", path.dirname(string)); // 파일이 위치한 폴더 경로
console.log("path.extname() : ", path.extname(string)); // 파일의 확장자
console.log("path.basename() : ", path.basename(string)); // 파일의 이름(확장자 포함)을 보여준다. 파일의 이름만 표시하고 싶다면
console.log("path.basename() : ", path.basename(string, path.extname(string))); // basename의 두 번째 인자로 파일의 확장자를 넣어주면 된다.
console.log("---------------------------------");
console.log("path.parse() ", path.parse(string)); // 파일 경로를 root, dir, base, ext, name 으로 분리
console.log(
  "path.format() : ",
  path.format({
    dir: "C:\\users\\zerocho",
    name: "path",
    ext: ".js",
  })
); // path.parse()한 객체를 파일 경로로 합친다.
console.log(
  "path.normalize() : ",
  path.normalize("C://users\\\\zerocho\\path.js")
); // /나 \를 실수로 여러 번 사용했거나 혼용했을 때 정상적인 경로로 변환
console.log("----------------------------------");
console.log("path.isAbsolute() : ", path.isAbsolute("C:\\")); // 파일의 경로가 절대경로인지 상대경로인지 true나 false로 알려준다.
console.log("path.isAbsolute() : ", path.isAbsolute("./home"));
console.log("----------------------------------");
console.log(
  "path.relative() : ",
  path.relative("C:\\users\\zerocho\\path.js", "C:\\")
); // 경로를 두 개 넣으면 첫 번째 경로에서 두 번째 경로로 가는 방법을 알려준다.
console.log(
  "path.join() : ",
  path.join(__dirname, "..", "..", "/users", ".", "/zerocho")
); // 여러 인자를 넣으면 하나의 경로로 합쳐준다. 상대경로인 ..(부모디렉터리)과 .(현 위치)도 알아서 처리해준다.
console.log(
  "path.resolve() : ",
  path.resolve(__dirname, "..", "users", ".", "/zerocho")
); // path.join()과 비슷하지만 차이가 있다
/*
join과 resolve의 차이
path.join과 path.resolve 메서드는 비슷해 보이지만 동작 방식이 다르다. path.resolve는 /를 만나면 절대 경로로 인식해서 앞의 경로를 무시하고,
path.join은 상대경로로 처리한다. 

path.join('/a', '/b', 'c');  결과 : /a/b/c
path.resolve('/a', '/b', 'c');  결과 : /b/c
 */

/*
path.sep :  \
path.delimiter :  ;
---------------------------------
path.dirname() :  C:\Users\luna\Desktop\proproject\Java-JS-Vue-React-Spring-Study\nodejs\builtInModule
path.extname() :  .js
path.basename() :  path.js
path.basename() :  path
---------------------------------
path.parse()  {
  root: 'C:\\',
  dir: 'C:\\Users\\luna\\Desktop\\proproject\\Java-JS-Vue-React-Spring-Study\\nodejs\\builtInModule',
  base: 'path.js',
  ext: '.js',
  name: 'path'
}
path.format() :  C:\users\zerocho\path.js
path.no,malize() :  C:\users\zerocho\path.js
----------------------------------
path.isAbsolute() :  true
path.isAbsolute() :  false
----------------------------------
path.relative() :  ..\..\..
path.join() :  C:\Users\luna\Desktop\proproject\Java-JS-Vue-React-Spring-Study\users\zerocho
path.resolve() :  C:\zerocho
*/
