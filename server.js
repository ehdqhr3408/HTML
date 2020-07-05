const http = require('http');
const fs = require("fs");

const server = http.createServer((request,response)=>{
    console.log(request.url);
    console.log(request.method);
    // if(request.url==='/'){
    //     response.write('hello');
    //     response.end();
    // }
    fs.readFile("./test2.html", null, (err, data) => {
        response.writeHead(200, {
            "Content-Type": "test/html"
        });
        response.write(data);
        response.end();
    });
});

server.listen(3000);