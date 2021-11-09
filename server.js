const http = require ('http');
const port = process.env.PORT || '3000';

const server = http.createServer((req, res) =>{
    res.end('Euzin').writeHead(200);
});


server.listen(port, () =>{
    console.log(`server running port ${port}`)
});