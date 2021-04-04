let puppeter=require("puppeteer")
let page;
let {email,password}=require('../fact/secret.js');
console.log(email+" "+password)
let browser=puppeter.launch(
    {
        headless:false,
        defaultViewport:null,
        args:["--incognito","--start-maximized"]
    }
    )

browser.then(function(Instance){
let newpage=Instance.newPage();
return newpage;
}).then(function(newTab){
 let open_page=   newTab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
 page=newTab
 console.log(" ------------------ "+open_page);
return open_page;
}).then(function(){
    console.log("OPEN PAGE");
    let emailenter=page.type("#input-1",email,{delay:100});
    return emailenter
}).then(function(){
    let passenter=page.type("#input-2",password,{delay:1});
    return passenter;
})

