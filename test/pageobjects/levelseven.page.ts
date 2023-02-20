import Page from "./page.js";

class Level7 extends Page {
    public get bigButton() {  
        return $("//button[contains(text(),'larger than 600px by 600px')]");
    }
    public get smallButton() {
        return $("//button[contains(text(),'smaller than 600px by 600px')]");
    }
    public get submitButton() {
        return $("//button[contains(text(),'Submit')]");
    }
    public open() {
        return super.open('level-7');
    }
    public resizeWindowSmaller() {
        browser.setWindowSize(500, 500);
    }

}

export default new Level7();