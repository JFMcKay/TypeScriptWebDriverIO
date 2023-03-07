import Level5 from '../pageobjects/levelfive.page.js';


describe('Level 5 informed', () => {
    it('Fill in 100 characters click modal and see if modal opens then closes', async () => {
        let alert: unknown;
        await Level5.open();
        // for (let i = 0; i < 35; i++) {
        //     await Level5.inputFieldPressA("123");
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
        
        await Level5.showModal.click();
        (await Level5.modalHello).waitForDisplayed({ timeout: 5000 });
        expect(await Level5.modalHello.isDisplayed()).toBe(true);
        await Level5.modalClose.click();

        await Level5.buttonToClick.click();
        alert = await browser.getAlertText();
        
        expect(alert).toContain('SUCCESS!');
        await browser.saveScreenshot('./test/screenshots/level5.png');
    });

    // it('Fill in 100 characters (Fail)', async () => {
    //     let alert: unknown;
    //     await Level5.open();
    //     for (let i = 0; i < 1; i++) {
    //         await Level5.inputFieldPressA("123");
    //         if (await browser.isAlertOpen() == true) {
    //             if (await browser.getAlertText() == 'Laughs in evil') {
    //                 await browser.acceptAlert();
    //                 alert = await browser.getAlertText();
    //             }
    //         }
    //     }

    //     await Level5.buttonToClick.click();
    //     if (await browser.isAlertOpen() == true) {
    //         alert = await browser.getAlertText();
    //     }
        
    //     expect(alert).toContain('Laughs in evil');
    //     await browser.saveScreenshot('./test/screenshots/level5.png');
    // });

});