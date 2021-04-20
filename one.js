url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

let request=require("request");
let cheerio=require("cheerio");
console.log("Before");
request(url, cb);
function cb(err,req,html)
{
   if(err)
   {
    console.log("err");
   }
   else {
  //  extractHtml(html);
    extractBatsMan(html);
   }
}

function extractHtml(html) {
    let selectorTool = cheerio.load(html);
    let teamNameElemArr = selectorTool(".Collapsible h5");
    let teamNameArr = [];
    for (let i = 0; i < teamNameElemArr.length; i++) {
        let teamName = selectorTool(teamNameElemArr[i]).text();
        // console.log(teamName.split("INNINGS"));
        teamName = teamName.split("INNINGS")[0];
        //teamName = teamName.trim();
        teamNameArr.push(teamName);
    }
    console.log(teamNameArr);
  }
  function extractBatsMan(html)
  {
    let page_data=cheerio.load(html)
    let inside_data=page_data(".table.batsman");
    let arr=[]
    for(let i=0;i<inside_data.length;i++)
    {
       let val=page_data(inside_data[i]).find(".batsman-cell.text-truncate.out");
       console.log(val.text())
    }
  }
