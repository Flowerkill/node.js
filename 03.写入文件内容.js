//1. 导入 fs 文件系统模块
const fs = require("fs");
//2. 调用 fs.writeFile()方法，写入文件内容
//   参数1：表示文件的存放路径
//   参数2：表示要写入的内容
//   参数3：编码格式，默认为utf8 可省略
//   参数4：回调函数
fs.writeFile("./files/3.txt", "ok123", function(err) {
    // 如果写入成功则err 为 null
    // 写入失败则err 的值等于一个错误对象
    // console.log(err);
    if (err) {
        return console.log("文件写入失败！" + err.message);
    }
    console.log("文件写入成功");
})