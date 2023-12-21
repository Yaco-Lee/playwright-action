const { test, expect } = require('@playwright/test');
//import {LoginPage} from '../pages/login';


test('should create a bug report', async ({ request }) => {
    const response = await request.get(`https://523fc9d9-e18e-4e0c-8f03-3a0b12a8dcc8.mock.pstmn.io`);
    const dataToJson = await response.json()
    expect(response.ok()).toBeTruthy();
    expect(dataToJson.data.getWileyBaseProduct.maId == "00101127")
  
    // const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    // expect(issues.ok()).toBeTruthy();
    // expect(await issues.json()).toContainEqual(expect.objectContaining({
    //   title: '[Bug] report 1',
    //   body: 'Bug description'
    // }));
  });
  












// test('api-test-01', async ({page}) => {
    
//     await page.route("XXXX", (route) => {
//         route.fulfill({
//             status: 200,
//             contentType: "application/json",
//             path: "XXXX"
//         })
//     })

//     await page.goto("XXXX")
//     expect(response).not.toBeNull();
// });

// test.only('Reads API response', async({page}) => {
//     const Login = new LoginPage(page); 
//     await Login.goToCheckoutLoginPage();
//     const response = await page.waitForResponse(res => res.status() === 200);
//     expect(response).not.toBeNull();
//     expect(response.status()).toBe(200);
// });
