//const { pathToFileURL } = require("node:url");
const puppeteer = require("puppeteer");


let coat_url=[]
 coat_url=[ 
               ["https://www.tailorstore.co.in/suit-designer#QZsZrPEkVHGMrgpfN8E262z079YvhF24Jz5noo08f365tv2fGWvDnhNsFfNo4RJ42jU|2MgFk1"],
               ["https://www.tailorstore.co.in/suit-designer#QZsZrPEkVHGMrgpfN8E262z079YvhF24Jz5noo08f365tv2fGWvDnhNsFfNo4RJ42jU|2MgFk1||1DsWa/fabric"],
               ["https://www.tailorstore.co.in/suit-designer#QZsZrPEkVHGMrgpfO0FSF0GOUPVvu1nOVN7iFmTlNCxf59hjhy73nomDRjwN1cyXAme|2MgFjy||1DsWa/fabric"],
               ["https://www.tailorstore.co.in/suit-designer#QZsZrPEkVHGPiehzL5fmWJyD28GT3HaNmfBkibDNu5WOKzD5Uuc0q9nyjCPhmjTIsFa|2MgFAq||1DsWa/fabric"]
            ]


           
              let Name=[];
              Name=["Notes","Mom"]
            
             console.log(Name);

//setTimeout(function(){},2000)

console.log("span[title='"+Name+"']");

async function scrape(url)
 {
  
      const browser = await puppeteer.launch({ headless: false,defaultViewport:null, args:['--start-maximized' ] });
      const page = await browser.newPage();
      await page.goto(url);


      for(let k=0;k<Name.length;k++)
      {
            if(k==Name.length)
            {
                  break;
            }



            
                     await page.waitForSelector("span[title='"+Name[k]+"']");
                     const target = await page.$("span[title='"+Name[k]+"']")
                     await target.click();
                     const inp = await page.$(
                        // "#main > footer > div._3ee1T._1LkpH.copyable-area > div._3uMse > div > div._3FRCZ.copyable-text.selectable-text"
                        "#main > footer > div.vR1LG._3wXwX.copyable-area > div._2A8P4 > div > div._2_1wd.copyable-text.selectable-text"
                     );

                     for (let i = 0; i < 2; i++) {
                        await inp.type("ok this is magic");
                        await page.keyboard.press("Enter");

                        
                        await page.click('span[data-icon="clip"]');

                        const [filechosser]=await Promise.all([
                           page.waitForFileChooser(),
                           await page.click('span[data-icon="attach-document"]')
                           ])
                          
                           
                           await filechosser.accept(['C:/Users/saurabh/Desktop/Pep_Dev/Tailor/image.jpg']);
                           
                            await page.waitForSelector("._3v5V7");
                           await page.click("._3v5V7")

                     }

                  
                     const services = await page.evaluate(() =>
                        Array.from(
                           document.querySelectorAll("[dir='ltr']"),
                           (element) => element.textContent
                        )
                     )
                  
               console.log(...services);
               //serch krlena direct
       }

       
console.log('=================================');
   
}


console.log('Ou:-2');
   


scrape("https://web.whatsapp.com");




 function check_coat(num_no)
{
   for(let l=0;l<coat_url.length;l++)
   {

    
        if(num_no<3)
        {
            console.log("Done");
            break
        }
        else
       { console.log("  @  "+coat_url[l]);}
   }

}






