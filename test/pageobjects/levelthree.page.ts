import Page from "./page.js";

class Level3 extends Page {
    public get inputField() {  
        return $$("//input");
    }
    public get inputField1() {  
        return $("//input[1]");
    }
    public get inputField2() {  
        return $("//input[2]");
    }
    public get inputField3() {  
        return $("//input[3]");
    }
    public get inputField4() {  
        return $("//input[4]");
    }
    public get buttonToClick() {
        return $("//button");
    }

    public open() {
        return super.open('level-3');
    }

}

export default new Level3();