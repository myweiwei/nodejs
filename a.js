//全局模块
//获取环境变量
//console.log(process.env);
//用来展示输入的命令，可做简单计算或根据输入指令返回对应值
//console.log(process.argv);

//系统模块
//操作文件
let fs = require('fs');
// fs.readFile('a.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     else {
//         console.log(data.toString());
//     }
// })
// fs.writeFile('a.txt','234',{flag:'a'},(err)=>{
//     if(err){
//         throw err;
//     }
// })
//let mod = require('./mod');
// console.log(mod.a);
// console.log(mod.c);
//mod();
let http=require('http');
http.createServer((req,res)=>{
    //在界面展示内容
    // res.write('index');
    // res.end();
    //访问文件
    // fs.readFile(`./${req.url}`,(err,data)=>{
    //     if(err){
    //         res.writeHead(404);
    //         res.end('404 not found');
    //     }else {
    //         res.end(data);
    //     }
    // })
    console.log(req.url);
}).listen(8888);




