import Page from "./page.js";

class Level3 extends Page {
    public get inputField() {  
        return $$("//input");
    }
    public get buttonToClick() {
        return $("//button");
    }

    public open() {
        return super.open('level-3');
    }

}

export default new Level3();