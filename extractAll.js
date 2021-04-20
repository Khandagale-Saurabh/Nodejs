//Extract all images
url=""
let req=require('request');
let cheerio=require('cheerio');
const request = require('request');
req(url,ch());
function ch(err,res,html)
 {
   if(err)
   {
     console.log(err);
   }
   else{extractImg(html)}
}

function extractImg(html)
{
    im_arr=[]
    let page_data=cheerio.load(html)
    let inside=page_data(inside("img",'div.photo-grid').each(function[] {
        let img1=page_data(this).attr("src");
        im_arr.push(img1)
    }));
}