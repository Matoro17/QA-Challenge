const Page = require('./page');

class CreateContractPage extends Page {

    get fixedTypeContractButton (){
        return $('a[href="/create/fixed"]');
    }

    open (){
        return super.open('create');
    }

    open (type) {
        return super.open(`create/${type}`);
    }

    async setCreationParameters(data){
        await this.inputName.setValue(data.name)
        await this.inputJobTitle.setValue(data.jobtitle)
        await this.inputTaxResidence.setValue(data.taxresidence)
        await browser.keys('Enter')
        await this.inputStateTaxresidence.setValue(data.state)
        await browser.keys('Enter')
        await this.inputSeniorityLevel.setValue(data.senioritylevel)
        await browser.keys('Enter')
        await this.TextareaScopeOfWork.setValue(data.scope)
        await this.inputStartDay.scrollIntoView()
        await this.inputStartDay.click()
        await browser.keys('ArrowLeft')
        await browser.keys('Enter')
        await this.nextButton.click()
        
        await this.currencyInput.setValue(data.currency)
        await browser.keys('Enter')
        await this.paymentrateInput.setValue(data.paymentRate)
        await this.paymentFrequencyInput.setValue(data.paymentfrequency)
        await browser.keys('Enter')
        await new Promise(r => setTimeout(r, 200));
        await this.nextButton.scrollIntoView()
        await this.nextButton.click()
        await new Promise(r => setTimeout(r, 200));
        await this.nextButton.scrollIntoView()
        await this.nextButton.click()
        await new Promise(r => setTimeout(r, 200));
        await this.nextButton3.scrollIntoView()
        await this.nextButton3.click()
        await new Promise(r => setTimeout(r, 200));
        await this.createContractButton.scrollIntoView()
        await this.createContractButton.click()
        
        await new Promise(r => setTimeout(r, 20));
        await this.cancelContractButton.click()
        await this.yesCancel.click()
        await this.okButton.click()
    }

    get inputName () {
        return $('input[name="name"]')
    }

    get inputTaxResidence () {
        return $('//label[contains(text(),"Contractor\'s tax")]/../div/div/div[2]/div/input')
    }

    get inputStateTaxresidence (){
        return $('//label[contains(text(),"state")]/../div/div/div[2]/div/input')
    }

    get inputJobTitle () {
        return $('input[name="jobTitle"]')
    }

    get inputSeniorityLevel () {
        return $('//label[contains(text(),"Seniority")]/../div/div/div[2]/div/input')
    }

    get TextareaScopeOfWork () {
        return $('textarea[name="scope"]')
    }

    get inputStartDay () {
        return $('input[name="effectiveDate"]')
    }

    get nextButton () {
        return $('//button/div[contains(text(),"next")]')
    }

    get nextButton3 () {
        return $('button[data-qa="next"]')
    }

    get currencyInput (){
        return $('//div[contains(text(),"USD - US Dollar")]/../div[2]/div/input')
    }

    get paymentFrequencyInput (){
        return $('//div[contains(text(),"Monthly")]/../div[2]/div/input')
    }

    get paymentrateInput () {
        return $('input[name="rate"]')
    }

    get createContractButton (){
        return $('button[data-qa="create-contract"]')
    }

    get cancelContractButton () {
        return $('//span[contains(text(),"Cancel contract")]')
    }

    get yesCancel () {
        return $('//button[@data-qa="yes-cancel"]')
    }

    get okButton () {
        return $('//button[@data-qa="ok-button"]')
    }

}

module.exports = new CreateContractPage();