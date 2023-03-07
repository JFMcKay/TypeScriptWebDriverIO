import Level3 from '../pageobjects/levelthree.page.js';

describe('Level 3 informed', () => {
    it('All fields need to be filled before submit', async () => {
        await Level3.open();
        // Get drop down number text
        let alert;
        // let inputNum;
        // while (await browser.isAlertOpen() == false) {
        //     if (await Level3.buttonToClick.isDisplayed()) {
        //         inputNum = await Level3.inputField.length;
        //     }
        //     for (let i = 0; i < inputNum; i++) {
        //         if (await Level3.inputField[i].isDisplayed()) {
        //             await Level3.inputField[i].waitForDisplayed({ timeout: 5000 });
        //             await Level3.inputField[i].setValue('a');   
        //         }
        //     }
        //     if (await Level3.buttonToClick.isDisplayed()) {
        //         await Level3.buttonToClick.click();
        //     }
        //     alert = await browser.getAlertText();

        // }
        await browser.executeAsync((done) => {
            const inputElement = document.querySelectorAll('input');
            for (let i = 0; i < inputElement.length; i++) {
                inputElement[i].value = 'a';
            }
            done();
        });
        await Level3.buttonToClick.click();
        await browser.saveScreenshot('./test/screenshots/level3.png');
        await browser.waitUntil(Level3.isAlertPresent());
        alert = await browser.getAlertText();

        
        expect(alert).toContain('SUCCESS!')
        await browser.saveScreenshot('./test/screenshots/level3.png');
    });

});