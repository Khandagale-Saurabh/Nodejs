const puppeteer = require("puppeteer");

async function scrape(url) {
   try{
                                 const browser = await puppeteer.launch({ headless: false });
                                 const page = await browser.newPage();
                                 await page.goto(url);
                                 await page.waitForSelector("span[title='Notes ']");
                                 const target = await page.$("span[title='Notes ']")
                                 await target.click();
                                 const inp = await page.$(
                                    // "#main > footer > div._3ee1T._1LkpH.copyable-area > div._3uMse > div > div._3FRCZ.copyable-text.selectable-text"
                                    "#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text"
                                 );

                                 for (let i = 0; i < 2; i++) {
                                    //await inp.type("ok this is magic");
                                    //await page.keyboard.press("Enter");

                                 }


                                  
                                 

                                 const services = await page.evaluate(() =>
  Array.from(
    document.querySelectorAll("[dir='ltr']"),
    (element) => element.textContent
  )
)
services[1]='No'
services[2]='No'
services[3]='No'
let count_no=3;
let i=0;

let coat_url=[]
let coat_url=[ 
               ["https://www.tailorstore.co.in/suit-designer#QZsZrPEkVHGMrgpfN8E262z079YvhF24Jz5noo08f365tv2fGWvDnhNsFfNo4RJ42jU|2MgFk1"],
               
            ]
while(i!=3||count_no<2)
{
if(count_no>=2)
{
   
   check_coat(coat_url,)
}
else
{
console.log("FINALIZIED DRESS")
}
   }
//console.log(services[0]);

// console.log(services[1]);

// console.log(services[2]);



                              }catch(err)
                              {
                                 console.log(err);
                              }
}

scrape("https://web.whatsapp.com");

