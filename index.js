const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');


console.log('Bem vindo ao Bot conversor 🤖💰');



async function robo() {
  const browser = await puppeteer.launch({headless: true, args: ["--no-sandbox",
  "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  const linguaBase = readlineSync.question('Informe uma lingua base: ') || 'português';
  const linguaFinal = readlineSync.question('Informe uma lingua desejada:') || 'inglês';

  const qualquerUrl = `https://www.google.com/search?q=tradutor+${linguaBase}+para+${linguaFinal}&sxsrf=ALeKk014ocPYlaGkEBv7yQ7esnJB-smI7w%3A1627486563237&ei=Y3kBYfbKDYrR1sQP24mY4AI&oq=tradutor&gs_lcp=Cgdnd3Mtd2l6EAMYATIHCCMQsAMQJzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQsAMQQ0oECEEYAFAAWABgxRloAXACeACAAYQBiAGEAZIBAzAuMZgBAKoBB2d3cy13aXrIAQrAAQE&sclient=gws-wiz`;
  await page.goto(qualquerUrl);
  // await page.screenshot({path: 'example.png'});



 const resultado = await page.evaluate(() => {
    document.getElementsByClassName('textarea').value = "Esse eh um valor de teste"
    return document.querySelector('.Y2IQFc').value;
  });
  console.log(resultado)
   await browser.close();
}

robo()
