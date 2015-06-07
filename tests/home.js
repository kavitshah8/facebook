module.exports = {
  'Demo test facebook' : function (browser) {
  	var data = browser.globals;

    browser
      .url('http://www.facebook.com')
      .waitForElementVisible('input#email.inputtext', 1000)
      .setValue('input#email.inputtext', data.username)
      .setValue('input#pass.inputtext', data.passowrd)
      .submitForm('form#login_form input[type=submit]')
      .end();
  }
};