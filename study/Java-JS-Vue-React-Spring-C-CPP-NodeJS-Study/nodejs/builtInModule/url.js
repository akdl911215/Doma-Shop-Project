const url = require("url");

const URL = url.URL;
const myURL = new URL(
  "http://www.gitbut.co.kr/book/book>List.aspx?sercate1=001001000#anchor"
);
console.log("new URL() : ", myURL);
console.log("url.format() : ", url.format(myURL));
console.log("----------------------------------");
const parsedUrl = url.parse(
  "http://www.gitbut.co.kr/book/book>List.aspx?sercate1=001001000#anchor"
); // 주소를 분해한다. WHATWG 방식과 비교하면 username과 password 대신 auth 속성이 있고, searchParams 대신 query가 있다.
console.log("url.parse() : ", parsedUrl);
console.log("url.format() : ", url.format(parsedUrl)); // WHATWG 방식의 url과 기존 노드의 url 모두 사용할 수 있다. 분해되었던 url 객체를 다시 원래 상태로 조립한다.

/*
new URL() :  URL {
  href: 'http://www.gitbut.co.kr/book/book%3EList.aspx?sercate1=001001000#anchor',
  origin: 'http://www.gitbut.co.kr',
  protocol: 'http:',
  username: '',
  password: '',
  host: 'www.gitbut.co.kr',
  hostname: 'www.gitbut.co.kr',
  port: '',
  pathname: '/book/book%3EList.aspx',
  search: '?sercate1=001001000',
  searchParams: URLSearchParams { 'sercate1' => '001001000' },
  hash: '#anchor'
}
url.format() :  http://www.gitbut.co.kr/book/book%3EList.aspx?sercate1=001001000#anchor
----------------------------------
url.parse() :  Url {
  protocol: 'http:',
  slashes: true,
  auth: null,
  host: 'www.gitbut.co.kr',
  port: null,
  hostname: 'www.gitbut.co.kr',
  hash: '#anchor',
  search: '?sercate1=001001000',
  query: 'sercate1=001001000',
  pathname: '/book/book%3EList.aspx',
  path: '/book/book%3EList.aspx?sercate1=001001000',
  href: 'http://www.gitbut.co.kr/book/book%3EList.aspx?sercate1=001001000#anchor'      
}
url.format() :  http://www.gitbut.co.kr/book/book%3EList.aspx?sercate1=001001000#anchor
*/
