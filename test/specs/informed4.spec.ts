import Level4 from '../pageobjects/levelfour.page.js';


describe('Level 4 informed', () => {
    it('Fill in 100 characters', async () => {
        await Level4.open();
        for (let i = 0; i < 55; i++) {
            await Level4.inputFieldPressA(i as any as string);
            await browser.acceptAlert();
        }
        await Level4.buttonToClick.click();
        const alert = await browser.getAlertText();
        expect(alert).toContain('SUCCESS!')
    });

});