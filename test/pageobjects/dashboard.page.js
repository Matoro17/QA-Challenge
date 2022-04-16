const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashBoardPage extends Page {
    /**
     * define selectors using getter methods
     */

    get root (){
        return $('//')
    }

    get title(){
        return $('h1[data-qa="heading"]');
    }

    get createContractSidePanelButton(){
        return $('a[href="/create"]');
    }

    get sideBarMenuButton (){
        return $('button[class="button mt-4 mr-7"]')
    }

    get userAvatar (){
        return $('//div[contains(text(),"GA")]')
    }

    get loggoutButton () {
        return $('//a[contains(text(),"Logout")]')
    }

    get logintitle (){
        return $('//h1[contains(text(),"Log in")]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    async loggout (){
        await this.sideBarMenuButton.click()
        await new Promise(r => setTimeout(r, 20));
        await this.userAvatar.click()
        await new Promise(r => setTimeout(r, 20));
        await this.loggoutButton.click()
        await new Promise(r => setTimeout(r, 20));
        await this.logintitle.click()
    }

    get nextButton () {
        return $('div[class="deel-ui__icon deel-ui__icon__orientation-left ml-7"]')
    }

    get nextButtonFinal (){
        return $('//span[contains(text(),"Done")]')
    }

    get acceptCookies () {
        return $('//div[@id="CybotCookiebotDialogBodyButtons"]/a[contains(text(),"Allow all cookies")]')
    }

    async advanceFirstSteps () {
        await this.nextButton.click()
        await this.nextButton.click()
        await this.nextButton.click()
        await this.nextButtonFinal.click()
        await this.acceptCookies.click()
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open();
    }
}

module.exports = new DashBoardPage();