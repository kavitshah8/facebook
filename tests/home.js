module.exports = {
  'Demo test facebook' : function (browser) {
    browser
      .url('http://www.facebook.com')
      .waitForElementVisible('input#email.inputtext', 1000)
      .setValue('input#email.inputtext', 'barfoo224@gmail.com')
      .setValue('input#pass.inputtext', 'secret11')
      .submitForm('form#login_form input[type=submit]')
      .end();
  }
};