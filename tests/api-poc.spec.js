const { test, expect } = require('@playwright/test');

test('Test viax login with invalid credentials', async ({request, page}) => {
  const response = await request.post(`https://api.wiley.dev.viax.io/graphql`, {
    data: {
      "operationName":"wLogin","variables":{"email":"esteesunemail@yopmail.com","password":"adaadawdawsd","country":"gb"},"query":"mutation wLogin($email: String!, $password: String!, $country: String!) {\n  wLogin(email: $email, password: $password, country: $country)\n}"
    }
  });
  const dataToJson = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(dataToJson.data.wLogin.result == "ERROR");
})

test('Test viax login with valid credentials', async ({request, page}) => {
  const response = await request.post(`https://api.wiley.dev.viax.io/graphql`, {
    data: {
      "operationName":"wLogin","variables":{"email":"billfieldtest@gmail.com","password":"testing@123","country":"gb"},"query":"mutation wLogin($email: String!, $password: String!, $country: String!) {\n  wLogin(email: $email, password: $password, country: $country)\n}"
    }
  });
  const dataToJson = await response.json();
  expect(response.ok()).toBeTruthy();
  expect(dataToJson.data.wLogin.result).toHaveProperty('almToken');
  expect(dataToJson.data.wLogin.result).toHaveProperty('viaxToken');
})

// From here, tests use postman mock server

test('Checks maId is present', async ({ request }) => {
    const response = await request.get(`https://40a708ab-081b-4038-a980-17ae3b8f85f2.mock.pstmn.io/getWileyBaseProduct`);
    const dataToJson = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(dataToJson.data.getWileyBaseProduct.maId == "00101127");
  
  });

  test('Checks Approval status for product variant', async ({ request }) => {
    const response = await request.get(`https://40a708ab-081b-4038-a980-17ae3b8f85f2.mock.pstmn.io/getWileyProductVariant`);
    const dataToJson = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(dataToJson.data.getWileyProductVariant.wApprovalStatus == "APPROVED");
  })
  
  test('Checks number of wClassificationAttributes', async ({ request }) => {
    const response = await request.get(`https://40a708ab-081b-4038-a980-17ae3b8f85f2.mock.pstmn.io/getWileyProductVariant`);
    const dataToJson = await response.json();
    expect(response.ok()).toBeTruthy();
    expect(dataToJson.data.getWileyProductVariant.wClassificationAttributes.lenght == 3);
  })
