const domain =  __dirname.split(/\\|\//).pop();
routes = {
  title: 'Amazon - amazon',
  url: 'https://www.amazon.com/',
  skip:  [],
  cache: {},
  log: {
    'amazon.com': {contentType: ['json']},
  },
  html: {
    'amazon-adsystem.com': '',
    'www.amazon.com': {
      resp({body}) {
        body = (body+'').replace(/iframe/g, 'div');
        return {body}
      }
    }
  },
  js: {
    'amazon-adsystem.com': ''
  }
}
global.mitm.fn.routeSet(routes, domain, true)
