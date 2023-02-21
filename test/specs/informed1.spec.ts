import Level1 from '../pageobjects/levelone.page.js';

describe('Level 1 informed', () => {
    it('Name should match random name', async () => {
        await Level1.open();
        
        await Level1.nameToEnter.waitForExist();
        let name: string = await Level1.nameToEnter.getText();
        await Level1.enterName(name);

        let alert = await browser.getAlertText();
        expect (alert).toContain('SUCCESS!')
        browser.saveScreenshot('./test/screenshots/level1.png');
    });

    it('Name is not random name', async () => {
        await Level1.open();

        await Level1.nameToEnter.waitForExist();
        let name: string = await Level1.nameToEnter.getText();
        await Level1.enterName(name + 'a');
        
        let alert = await browser.getAlertText();
        expect (alert).toContain('FAILURE!')
        browser.saveScreenshot('./test/screenshots/level1ffail.png');
    });
});