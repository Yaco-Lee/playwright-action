exports.LoginPage = class LoginPage{

    constructor(page){

        this.page = page
        this.confirm_email_tbox = page.locator('input[name="confirmEmail"]');
        this.user_email_tbox = page.locator('(//input[@name="email"])[1]');
        this.new_user_email_tbox = page.locator('input[name="email"]');
        this.confirm_password_tbox = page.locator('input[name="confirmPassword"]');
        this.first_name_tbox = page.locator('input[name="firstName"]');
        this.last_name_tbox = page.locator('input[name="lastName"]');
        this.password_tbox = page.locator('input[name="password"]');
        this.edit_btn = page.locator('//button[contains(@class,\'checkout__edit-btn\')]')
        this.login_btn = page.locator('//button[contains(@class,\'login-account__submit-btn\')]');
        this.create_new_account_btn = page.getByRole('button', { name: 'Create a new account' });

    };

    async goToCheckoutLoginPage(page){
        await this.page.goto('https://dev.checkout.wiley.com/en-gb/login');
    }

    async goToCheckoutRegistrationPage(page){
        await this.page.goto('https://dev.checkout.wiley.com/en-gb/cart?sku=9781119904625&prom=FREE14');
    }

    async login(email, password){
        await this.user_email_tbox.fill(email)
        await this.password_tbox.fill(password)
        await this.login_btn.click()
    };

    async createUser(firstName, lastName, email, password){
        await this.firstName.fill(firstName)
        await this.lastName.fill(lastName)
        await this.email.fill(email)
        await this.confirm_email_tbox.fill(email)
        await this.password.fill(password)
        await this.confirm_password_tbox,fill(password)
    };

}
