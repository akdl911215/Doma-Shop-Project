const fs = require("fs");

setInterval(() => {
  fs.unlink("./abcdefg.js", (err) => {
    if (err) console.error(err);
  });
}, 1000);

/*
[Error: ENOENT: no such file or directory, unlink 'C:\Users\luna\Desktop\proproject\Java-JS-Vue-React-Spring-Study\nodejs\exceptionTest\abcdefg.js'] {
  errno: -4058,
  code: 'ENOENT',
  syscall: 'unlink',
  path: 'C:\\Users\\luna\\Desktop\\proproject\\Java-JS-Vue-React-Spring-Study\\nodejs\\exceptionTest\\abcdefg.js'
}

무한 반복!
*/
