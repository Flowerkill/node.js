const path = require("path");
const fs = require("fs");
//注意：../会抵消前面一层的路径
const pathStr = path.join("/a", "/b/c", "../", "./d", "/e");
console.log(pathStr); // /a/b/d/e
// path.join拼接路径
// __dirname 表示当前路径
fs.readFile(path.join(__dirname, "/files/1.txt"), "utf8", function(err, dataStr) {
    if (err) {
        return console.log(err.message);
    }
    console.log(dataStr);
})