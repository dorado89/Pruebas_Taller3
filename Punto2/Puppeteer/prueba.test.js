const APP = "https://angular-6-registration-login-example.stackblitz.io/register";
var firstName = makeid(8);
var lastName = makeid(8);
var username = makeid(8);
describe("Contact form", () => {
    test("user can submit a contact request", async () => {
        await page.goto(APP);
        await page.waitForNavigation();
        await page.click("input[formcontrolname=firstName]");
        await page.type("input[formcontrolname=firstName]", firstName);
        await page.click("input[formcontrolname=lastName]");
        await page.type("input[formcontrolname=lastName]", lastName);
        await page.click("input[formcontrolname=username]");
        await page.type("input[formcontrolname=username]", username);
        await page.click("input[formcontrolname=password]");
        await page.type("input[formcontrolname=password]", "12345678");
        await expect(page).toClick('button', {text: 'Register'});
        await page.waitForNavigation();
        await page.click("input[formcontrolname=username]");
        await page.type("input[formcontrolname=username]", username);
        await page.click("input[formcontrolname=password]");
        await page.type("input[formcontrolname=password]", "12345678");
        await expect(page).toClick('button', {text: 'Login'});
        await page.waitForNavigation();
        await expect(page).toMatch('Hi '+firstName+'!')
    }, 16000);
});
function makeid(length) {
    var result = '';
    var characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}