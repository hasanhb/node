let http =require('http');
let data ={
name:'karim' ,
age: 20,


}
let server =http.createServer(function(req,res){
res.end(JSON.stringify(data));


});
server.listen(5000);
console.log ('server is started');