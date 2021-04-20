let url="https://www.espncricinfo.com/series/zimbabwe-tour-of-united-arab-emirates-2020-21-1252053/afghanistan-vs-zimbabwe-3rd-t20i-1252060/full-scorecard"
let request=require("request")
let cheerio=require("cheerio");
request(url,ch);
function ch(err,respond,html)
{
   if(err)
   {
console.log(err);
   }
   else {
     call1(html)
   }
}

function call1(html)
{
let page_data=cheerio.load(html);
let inside_data=page_data(".table.batsman");
for(let i=0;i<inside_data.length;i++)
{
  let find_item=page_data(inside_data.find("tbody tr td.batsman-cell.text-truncate.out a"));
  console.log(find_item.attr("href"))
let li1=find_item.attr("href");
request(li1,ch)
call2(li1)

  //#main-container > div.match-page-wrapper.scorecard-page-wrapper > div.container > div.row > div.col-16.col-md-16.col-lg-12.main-content-x > div.match-body > div.match-scorecard-page > div:nth-child(1) > div.Collapsible > div > div > div > table.table.batsman > tbody > tr:nth-child(1) > td.batsman-cell.text-truncate.out > a
}
}
function call2(link)
{
request(link,ch)


function ch(err,respond,html)
{
   if(err)
   {
console.log(err);
   }
   else {
     call2(html)
   }
}
let page2=cheerio.load(link);
let ans=page2(".pnl490M");
console.log("==",ans.text());
}
