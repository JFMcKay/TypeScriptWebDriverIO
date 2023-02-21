import Level3 from '../pageobjects/levelthree.page.js';

describe('Level 3 informed', () => {
    it('All fields need to be filled before submit', async () => {
        await Level3.open();
        // Get drop down number text
        let alert;
        let inputNum = await Level3.inputField.length;
        while (await browser.isAlertOpen() == false) {
            if (await Level3.buttonToClick.isDisplayed()) {
                inputNum = await Level3.inputField.length;
            }
            for (let i = 0; i < inputNum; i++) {
                if (await Level3.inputField[i].isDisplayed()) {
                    await Level3.inputField[i].waitForDisplayed({ timeout: 5000 });
                    await Level3.inputField[i].setValue('a');   
                }
            }
            if (await Level3.buttonToClick.isDisplayed()) {
                await Level3.buttonToClick.click();
            }
            if (await browser.isAlertOpen() == true) {
                alert = await browser.getAlertText();
            }
        }
        // await Level3.inputField1.waitForDisplayed();
        // await Level3.inputField1.setValue('a');

        // await Level3.inputField2.waitForDisplayed();
        // await Level3.inputField2.setValue('a');

        // await Level3.inputField3.waitForDisplayed();
        // await Level3.inputField3.setValue('a');

        // await Level3.inputField4.waitForDisplayed();
        // await Level3.inputField4.setValue('a');

        await Level3.buttonToClick.click();


        await browser.saveScreenshot('./test/misc/level3.png');
        if (await browser.isAlertOpen() == true && alert == undefined) {
            alert = await browser.getAlertText();
        }
        expect(alert).toContain('SUCCESS!')
    });

});