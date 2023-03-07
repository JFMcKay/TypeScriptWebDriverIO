import Page from "./page.js";
import {Key} from 'webdriverio';

class Level5 extends Page {
    public get inputField() {  
        return $("//input");
    }
    public get buttonToClick() {
        return $("//button[contains(text(),'Submit')]");
    }

    public get showModal() {
        return $("//button[contains(text(),'Show Modal')]");
    }
    public get modalHello() {
        return $("//h1[contains(text(),'Hello')]");
    }
    public get modalClose() {
        return $("//button[contains(text(),'Close')]");
    }
    

    public open() {
        return super.open('level-5');
    }

    

    public async inputFieldPressA(value: string) {
        await this.inputField.addValue(value);
    }

}

export default new Level5();