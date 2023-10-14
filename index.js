import puppeteer from 'puppeteer'
import readlineSync from 'readline-sync'


console.log('Bem vindo ao Bot conversor 🤖💰');



async function robo() {
  const browser = await puppeteer.launch({headless: 'new' });
  const page = await browser.newPage();
  // const linguaBase = readlineSync.question('Informe uma lingua base: ') || 'português';
  // const linguaFinal = readlineSync.question('Informe uma lingua desejada:') || 'inglês';
  // const valor = readlineSync.question('Informe uma frase: ') || 'vadia'
  const qualquerUrl = 'https://e2.fiqueaquiimoveis.com.br/admin/leads/switch_kanban/1' 
  await page.goto(qualquerUrl)
  
  // const resultado = await page.evaluate(() => {
  //   document.getElementById('email').value = 'terenci@fiqueaquiimoveis.com.br'
  //   document.getElementById('password').value = 'Fique12345*'
  
  // });

  // maybe its work to
  //  await page.type("input[type=text]", "username");
  // await page.type("input[type=password]", "password");
  // await page.click("button[type=submit]");

  await page.type('#email', 'terenci@fiqueaquiimoveis.com.br');
  await page.type('#password', 'Fique12345*');
  await Promise.all(
    [
      page.click('button'),
      page.waitForNavigation()
    ]
  )

  await page.screenshot({path: 'example.png'});
  await browser.close();

}

robo()
