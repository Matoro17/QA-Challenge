const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DashBoardPage extends Page {
    /**
     * define selectors using getter methods
     */

    get title(){
        return $('h1[data-qa="heading"]');
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

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('create-account/company');
    }
}

module.exports = new DashBoardPage();