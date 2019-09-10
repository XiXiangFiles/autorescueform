module.exports = {
  'Demo test' : function (browser) {
    browser
      .url('https://ems.mohw.gov.tw/')
      .pause(60000)
      .end();
  }
};
