let http=require('http');
let url=require('url');
let user={"test":"123"};
let fs=require('fs');
var loginFunc=function(para,res){
    res.writeHead(200,{
        "Content-Type":"text/plain;charset=utf-8"
    })
    if(!user[para.username]){
        res.end(JSON.stringify({
            err:1,
            msg:'无此用户'
        }))
    }
    else if(user[para.username]!=para.password){
        res.end(JSON.stringify({
            err:1,
            msg:'密码错误'
        }))
    }
    else {
        res.end(JSON.stringify({
            err:0,
            msg:'登陆成功'
        }))
    }
}
http.createServer((req,res)=>{
    let path='';
    let para='';
    var completeFunc=function(){
        if(path=='/login'){
            loginFunc(para,res);
        }
        else {
            fs.readFile(`./${path}`,(err,data)=>{
                if(err){
                    res.end('404');
                }
                else {
                    res.end(data);
                }
            })
        }
    }
    if(req.method=='GET'){
        let {pathname,query }=url.parse(req.url,true);
        path=pathname;
        para=query;
        completeFunc();
    }
    else if(req.method=='POST'){
        let result=[];
        path=req.url;
        //当post获取到传输每条数据时
        req.on('data',buffer=>{
            result.push(buffer);
        })
        //传输完成时
        req.on('end',()=>{
            let data=Buffer.concat(result).toString();
            para=JSON.parse(data);
            completeFunc();
        })
    }
    
    
}).listen(8888);