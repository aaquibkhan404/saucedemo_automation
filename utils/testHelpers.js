const { LoginPage } = require('../pages/LoginPage');
const { validUser } = require('../test-data/testData');

async function loginAsStandardUser(page) {

  const login = new LoginPage(page);

  await login.navigate();

  await login.login(
    validUser.username,
    validUser.password
  );

}

module.exports = { loginAsStandardUser };