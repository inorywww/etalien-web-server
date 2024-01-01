exports.keys = 'etalien-web-server';

exports.view = {
  defaultViewEngine: 'ejs',
  mapping: {
    '.html': 'ejs',
  },
};
exports.security = {
  domainWhiteList: [
    'http://localhost:8080',
    '.et-api.com',
  ],
  csrf:{
    enable: false,
  }
}

exports.ejs = {};