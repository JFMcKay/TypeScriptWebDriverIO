import Page from "./page.js";
import {Key} from 'webdriverio';

class Level4 extends Page {
    public get inputField() {  
        return $("//input");
    }
    public get buttonToClick() {
        return $("//button");
    }

    public open() {
        return super.open('level-4');
    }

    public async inputFieldPressA(value: string) {
        await this.inputField.addValue(value);
    }

}

export default new Level4();