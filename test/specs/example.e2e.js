require("dotenv").config()
const dashboardPage = require('../pageobjects/dashboard.page');
const LoginPage = require('../pageobjects/login.page');

const TEST_USER_EMAIL = process.env.TEST_USER_EMAIL
const TEST_USER_PASSWORD = process.env.TEST_USER_PASSWORD

describe('Deel aplication QA test', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();

        await LoginPage.login(TEST_USER_EMAIL, TEST_USER_PASSWORD);

        await expect(dashboardPage.title).toBeExisting();
        await expect(dashboardPage.title).toHaveTextContaining(
            'Gabriel!');
    });
});


