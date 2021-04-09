let fs=require('fs');
let frp=fs.promises.readFile("f1.txt");
console.log("Before");
let thenkap=frp.then(cb);
console.log("then ka promise",thenkap);
function cb(data)
{
console.log("data ",data);
return fs.promises.readFile("f2.txt");
} 
thenkap.then(function (data){
console.log("",data);
})
