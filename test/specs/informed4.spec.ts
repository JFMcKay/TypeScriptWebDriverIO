import Level4 from '../pageobjects/levelfour.page.js';


describe('Level 4 informed', () => {
    it('Fill in 100 characters', async () => {
        let alert;
        await Level4.open();
        for (let i = 0; i < 55; i++) {
            await Level4.inputFieldPressA(i as any as string);
            if (await browser.isAlertOpen() == true) {
                await browser.acceptAlert();
            }
        }
        await Level4.buttonToClick.click();
        if (await browser.isAlertOpen() == true) {
            alert = await browser.getAlertText();
        }
        expect(alert).toContain('SUCCESS!')
        await browser.saveScreenshot('./test/screenshots/level4.png');
    });

});