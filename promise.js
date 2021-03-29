
// // // let arr = [1, 2, 3, 4];

// // // function f(arr,i)
// // // {
// // //     if(i==arr.length-1)
// // //     {
// // //         return ;
// // //     }
// // //     else{
       
// // //        f(arr,i++)
// // //        arr[i]=0

// // //     }
// // // }
// // // console.log(arr,0);
// // // console.log(f(arr,0));
// // // console.log(arr,0);

// // function f1(x,y)
// // {
// // return x*y;
// // }


// // function f2(x)
// // {
// // var p=function ff(y)
// // {
// //   return x*y;
// // }
// // return p
// // }

// // let aa=f2(2)(3)
// // console.log(aa);

// // console.log(f1(4,5));

// // let a=["a","b"]
// // console.log(a[2]);


// let output=new Promise(function(resolve,reject)
// {
//      if(2==22)
//      {
//          resolve("Done")
//      }
//      else{
//     reject("Not_done")
//      }
// });

// let done1=(res)=>
// {
// console.log(res);
// }
// let reject1=(rej)=>{
//     console.log(rej);
// }
// output.then(done1)

// //output.catch(reject1)

// let Prom=()=>Prom.readFile("Hello.txt",reject,accept);
// console.log(Prom);
let a=10,b=10;
let output=new Promise(function(reject,accept)
{
    if(a==b)
    {
        console.log("Accept");
    }
    else
    {
        console.log("Reject");
    }
});
let d1=(accept)=>{
console.log(accept);
}
let d2=(reject)=>{
    console.log(reject);
}
output.then(d1);
output.catch(d2);
