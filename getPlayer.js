let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results"
let request1 = require("request");
let cheerio1 = require("cheerio");
const request = require("request");

function check(err, req, html) {

    if (err) {
        console.log("Someting went Wrong");
    } else {
        getdata(html)
            //console.log("" + html);
    }
}
//SIvCob
request1(url, check)

let arr=[1]
function getdata(html) {
    let sel = cheerio1.load(html);
    let ans = sel(".col-md-8.col-16");
   
    for(let i=0;i<ans.length;i++)
    {
           let link=sel(ans[i]).find(".btn.btn-sm.btn-outline-dark.match-cta");
           let ind_link=sel(link[2]).attr("href")
           let rr="https://www.espncricinfo.com"+ind_link
           gePlayeofMatch(rr)
       
    }
 

}
function gePlayeofMatch(link)
{
    request1(link,check1)
    
function check1(err, req, link) {

    if (err) {
        console.log("Someting went Wrong");
    } else {
        
        //console.log(" ---- " + html);
        getdata1(link)
    }
}

}
function getdata1(html)
{
   let load1=cheerio1.load(html);
   
  let ans1=load1(".best-player-content").text();
    console.log(ans1.length+" "+ans1);

   
}


/*output
C:\Users\saurabh\Desktop\PROJECT_>node f2.js
25 Trent BoultMumbai Indians
33 Shahbaz NadeemSunrisers Hyderabad
20 KL RahulPunjab Kings
26 Ben StokesRajasthan Royals
26 Ben StokesRajasthan Royals
38 Virat KohliRoyal Challengers Bangalore
31 Shane WatsonChennai Super Kings
29 Quinton de KockMumbai Indians
43 Yuzvendra ChahalRoyal Challengers Bangalore
35 Dinesh KarthikKolkata Knight Riders
20 KL RahulPunjab Kings
28 Kieron PollardMumbai Indians
28 Shikhar DhawanDelhi Capitals
41 AB de VilliersRoyal Challengers Bangalore
33 Sandeep SharmaSunrisers Hyderabad
34 Kane WilliamsonSunrisers Hyderabad
35 Rahul TripathiKolkata Knight Riders
34 Ravindra JadejaChennai Super Kings
27 Jos ButtlerRajasthan Royals
34 Wriddhiman SahaSunrisers Hyderabad
24 Axar PatelDelhi Capitals
43 Yuzvendra ChahalRoyal Challengers Bangalore
25 Trent BoultMumbai Indians
29 Rahul TewatiaRajasthan Royals
36 Lockie FergusonKolkata Knight Riders
30 Suryakumar YadavMumbai Indians
24 Chris JordanPunjab Kings
32 Ambati RayuduChennai Super Kings
28 Sanju SamsonRajasthan Royals
28 Jasprit BumrahMumbai Indians
30 Suryakumar YadavMumbai Indians
41 Mohammed SirajRoyal Challengers Bangalore
28 Marcus StoinisDelhi Capitals
28 Sanju SamsonRajasthan Royals
26 Rohit SharmaMumbai Indians
25 Trent BoultMumbai Indians
32 Shivam MaviKolkata Knight Riders
26 Shreyas IyerDelhi Capitals
33 Ravichandran AshwinDelhi Capitals
41 AB de VilliersRoyal Challengers Bangalore
27 Anrich NortjeDelhi Capitals
39 Varun ChakravarthyKolkata Knight Riders
32 Manish PandeySunrisers Hyderabad
30 Priyam GargSunrisers Hyderabad
20 KL RahulPunjab Kings
26 Ishan KishanMumbai Indians
33 Jonny BairstowSunrisers Hyderabad
26 Prithvi ShawDelhi Capitals
41 AB de VilliersRoyal Challengers Bangalore
27 Anrich NortjeDelhi Capitals
34 Ruturaj GaikwadChennai Super Kings
34 Ruturaj GaikwadChennai Super Kings
23 Chris GaylePunjab Kings
33 Shubman GillKolkata Knight Riders
29 Quinton de KockMumbai Indians
28 Marcus StoinisDelhi Capitals
32 Pat CumminsKolkata Knight Riders
30 Rashid KhanSunrisers Hyderabad
34 Ruturaj GaikwadChennai Super Kings
28 Shikhar DhawanDelhi Capitals
*/
