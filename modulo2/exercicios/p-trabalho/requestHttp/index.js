import http from 'http'


http.createServer((req,res)=>{
    if(req.method ==="GET" && req.url ==="/test"){
        res.write("Get na url /test feito com sucesso");
    }else if(req.method ==="GET" && req.url ==="/users"){
        res.write("Get na url /users feita com sucesso");
    }else{
        res.write("Hello World!");
    }
    res.statusCode = 200
    res.end()
    
}).listen(8080);