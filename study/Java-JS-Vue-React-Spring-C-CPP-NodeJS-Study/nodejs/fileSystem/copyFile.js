const fs = require("fs");

fs.copyFile("readme4.txt", "writemem4.txt", (error) => {
  if (error) console.log(error);
  console.log("복사 완료");
});
// 복사 완료
