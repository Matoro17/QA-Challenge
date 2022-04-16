require("dotenv").config()
const dashboardPage = require('../pageobjects/dashboard.page');
const LoginPage = require('../pageobjects/login.page');
const createContractpage = require('../pageobjects/createContract.page');
const moment = require('moment');

const TEST_USER_EMAIL = process.env.TEST_USER_EMAIL
const TEST_USER_PASSWORD = process.env.TEST_USER_PASSWORD
const USER = process.env.USER

describe('Deel aplication QA test', () => {
    const today = new Date()

    afterEach(async () => {
        await dashboardPage.loggout()
    })

    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login(TEST_USER_EMAIL, TEST_USER_PASSWORD);

        await dashboardPage.advanceFirstSteps()

        await expect(dashboardPage.title).toBeExisting();
        await expect(dashboardPage.title).toHaveTextContaining(
            USER);
    });

    it('should create a contract with a fixed rate', async () => {
        await LoginPage.open();
        await LoginPage.login(TEST_USER_EMAIL, TEST_USER_PASSWORD);
        await expect(dashboardPage.title).toBeExisting();

        await createContractpage.open('fixed')
        const date = moment().subtract(1, 'days').format('MMM DD, YYYY')
        data = {
            name:'Jorge',
            jobtitle:'3D Artist',
            taxresidence:'United States',
            state: 'Colorado',
            senioritylevel: 'Not applicable',
            scope:'Nothing here',
            startday: date,
            currency: 'GBP',
            paymentRate: '1000',
            paymentfrequency: 'weekly',
        }
        await createContractpage.setCreationParameters(data)

    });
});


