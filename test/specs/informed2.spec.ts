import Level2 from '../pageobjects/leveltwo.page.js';

describe('Level 2 informed', () => {
    it('Inputs should match all randomly generated values', async () => {
        await Level2.open();
        // Get drop down number text
        let ddNum = await Level2.dropDownNumber.getText();
        // Get radio button number text
        let radioNum = await Level2.radioButtonNumber.getText();
        console.log("this is the radio num: ", radioNum);
        // Get date input value text
        const dateStr = await (await Level2.dateInputValue).getText();
        const date = new Date(dateStr);
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate() +1;
        await Level2.dateInput.setValue(`${month}${day}${year}`);
        await Level2.dropDown.selectByIndex(parseInt(ddNum)-1);
        //await Level2.dateInput.setValue(date);
        let checkBoxL = await Level2.checkBox.length;
        for (let i = 0; i < checkBoxL; i++) {
            await Level2.checkBox[i].click();
        }
        await (await Level2.radioButtons[parseInt(radioNum)-1]).click();
        await Level2.buttonToClick.click();
        let alert = await browser.getAlertText();
        expect (alert).toContain('SUCCESS!')
    });

});