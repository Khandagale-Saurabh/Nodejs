
let fs=require("fs");
let arr=["f1.txt","f2.txt"];
let fr=fs.promises.readFile(arr[0]);
for(let i=0;i<arr.length;i++)
{
 fr=fr.then(function(data){
console.log("Contenet "+data);
return fs.promises.readFile(arr[i]);
 })
 console.log("after");
}
