const path = require("path");
const fpath = "/a/b/c/index.html";
// path.basename方法可以从一个文件路径中获取到文件名称部分
const fullName = path.basename(fpath);
console.log(fullName); //打印 index.html
// 只拿到名称不拿到扩展名就加上第二个参数 
const nameWithoutExt = path.basename(fpath, ".html");
console.log(nameWithoutExt); //打印 index