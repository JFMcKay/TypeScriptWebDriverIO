import Page from "./page.js";

class Level2 extends Page {
    public get dropDownNumber () {
        return $("//body/dl[1]/dd[1]");
    }

    public get dateInputValue () {
        return $("//body/dl[1]/dd[4]");
    }
     
    public get radioButtonNumber () {
        return $("//body/dl[1]/dd[3]");
    }
    public get buttonToClick() {
        return $("//button[@type='submit']");
    }
    public get radioButtons () {
        return $$("//input[@type='radio']");
    }
    public get dateInput () {
        return $("//input[@type='date']");
    }

    public get checkBox () {
        return $$("//input[@type='checkbox']");
    }

    public get dropDown () {
        return $("//body/form[1]/select[1]");
    }

    public open() {
        return super.open('level-2');
    }

}

export default new Level2();