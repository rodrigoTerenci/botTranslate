import puppeteer from 'puppeteer'
import readlineSync from 'readline-sync'


console.log('Bem vindo ao Bot conversor 🤖💰');



async function robo() {
  const browser = await puppeteer.launch({headless: true, args: ["--no-sandbox",
  "--disable-setuid-sandbox"] });
  const page = await browser.newPage();
  const linguaBase = readlineSync.question('Informe uma lingua base: ') || 'português';
  const linguaFinal = readlineSync.question('Informe uma lingua desejada:') || 'inglês';
  const valor = readlineSync.question('Informe uma frase: ') || 'vadia'
  const qualquerUrl = 'https://web.whatsapp.com/' //`https://www.google.com/search?q=tradutor+${linguaBase}+para+${linguaFinal}&sxsrf=ALeKk014ocPYlaGkEBv7yQ7esnJB-smI7w%3A1627486563237&ei=Y3kBYfbKDYrR1sQP24mY4AI&oq=tradutor&gs_lcp=Cgdnd3Mtd2l6EAMYATIHCCMQsAMQJzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQRxCwAzIHCAAQsAMQQ0oECEEYAFAAWABgxRloAXACeACAAYQBiAGEAZIBAzAuMZgBAKoBB2d3cy13aXrIAQrAAQE&sclient=gws-wiz`;
  await page.goto(qualquerUrl)
  await page.screenshot({path: 'example.png'});
  await browser.close()



 /*const resultado = await page.evaluate((valor) => {
    document.getElementById('tw-source-text-ta').value = valor
    return document.getElementById('tw-target-text').textContent
  });
  console.log(resultado)
   await browser.close();
   */
}

robo()
