import Level4 from '../pageobjects/levelfour.page.js';


describe('Level 4 informed', () => {
    it('Fill in 100 characters', async () => {
        let alert: unknown;
        await Level4.open();
        // for (let i = 0; i < 35; i++) {
        //     await Level4.inputFieldPressA("123");
        //     if (await browser.isAlertOpen() == true) {
        //         if (await browser.getAlertText() == 'Laughs in evil') {
        //             await browser.acceptAlert();
        //         }
        //     }
        // }

        await browser.executeAsync((done) => {
            const inputElement = document.querySelector('input');
            inputElement.value ='123456789012345678901234567890123456789012345678901234567890123456789012345678901234567890123456789022';
            done();
        });

        await Level4.buttonToClick.click();
        alert = await browser.getAlertText();
        
        expect(alert).toContain('SUCCESS!');
        await browser.saveScreenshot('./test/screenshots/level4.png');
    });

    // it('Fill in 100 characters (Fail)', async () => {
    //     let alert: unknown;
    //     await Level4.open();
    //     for (let i = 0; i < 1; i++) {
    //         await Level4.inputFieldPressA("123");
    //         if (await browser.isAlertOpen() == true) {
    //             if (await browser.getAlertText() == 'Laughs in evil') {
    //                 await browser.acceptAlert();
    //                 alert = await browser.getAlertText();
    //             }
    //         }
    //     }

    //     await Level4.buttonToClick.click();
    //     if (await browser.isAlertOpen() == true) {
    //         alert = await browser.getAlertText();
    //     }
        
    //     expect(alert).toContain('Laughs in evil');
    //     await browser.saveScreenshot('./test/screenshots/level4.png');
    // });

});