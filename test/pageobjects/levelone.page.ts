import Page from './page.js';

class Level1 extends Page {
    // Page Elements
    public get nameToEnter () {
        return $('#randomString');
    }

    public get inputName () {
        return $('#nameInput');
    }

    public get submitButton () {
        return $('button=Submit');
    }
    

    public async enterName (name: string) {
        await this.inputName.setValue(name);
        await this.submitButton.click();
    }
    
    public open () {
        return super.open('level-1');
    }
}

export default new Level1();