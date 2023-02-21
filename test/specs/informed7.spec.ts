import Level7 from '../pageobjects/levelseven.page.js';


describe('Level 7 informed', () => {
    it('Resize screens and click buttons', async () => {
        await Level7.open();
        await Level7.bigButton.click();
        await Level7.resizeWindowSmaller();
        await Level7.smallButton.click();
        await Level7.submitButton.click();
        const alert = await browser.getAlertText();
        expect(alert).toContain('SUCCESS!')
        await browser.saveScreenshot('./test/screenshots/level7.png');
    });

});