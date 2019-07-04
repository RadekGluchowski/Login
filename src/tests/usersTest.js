const { Builder, By} = require("selenium-webdriver");
var faker = require('faker');

async function test() {

    let driver = new Builder().forBrowser("firefox").build();
    await driver.get("https://guarded-harbor-98764.herokuapp.com/");
    let nickName = await driver.findElement(By.id("nickname"))
    let email = await driver.findElement(By.id("email"))
    let ip = await driver.findElement(By.id("ip"))

    for (let i = 0; i < 20; i++) {
        let name = faker.name.findName()
        await nickName.sendKeys(name)
        await email.sendKeys(faker.internet.email())
        await ip.sendKeys(faker.internet.ip())
        await driver.findElement(By.xpath("/html/body/div[1]/div/div/div/div/div[2]/button")).click()
    }

    for (let i = 21; i > 4; i--) {
        await driver.findElement(By.xpath(`/html/body/div[1]/div/div/div[2]/table/tbody/tr[${i}]/td[4]/button`)).click()
        await driver.switchTo().alert().accept();
    }

    await driver.findElement(By.xpath("//button[text()=' Delete All ']")).click()
    setTimeout(() => driver.switchTo().alert().accept(), 3000)

}

test()

