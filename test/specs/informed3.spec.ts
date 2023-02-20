import Level3 from '../pageobjects/levelthree.page.js';

describe('Level 3 informed', () => {
    it('All fields need to be filled before submit', async () => {
        await Level3.open();
        // Get drop down number text
        let inputNum = await Level3.inputField.length;
        while (await browser.isAlertOpen() == false) {
            inputNum = await Level3.inputField.length;
            for (let i = 0; i < inputNum; i++) {
                if (await (await Level3.inputField[i]).isDisplayed()) {
                    await Level3.inputField[i].setValue('a');   
                }
            }
            await Level3.buttonToClick.click();
        }
        let alert = await browser.getAlertText();
        expect(alert).toContain('SUCCESS!')
    });

});