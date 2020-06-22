const contentType = ['json'];
const response = function({body}) {
  body = (body+'').replace(/iframe/g, 'div');
  return {body}
}

const route = {
  title: 'Amazon - amazon',
  url:  'https://www.amazon.com/b?node=229189',
  screenshot: {
    selector: 'button[type=submit],a',
    at: 'sshot',
  },
  cache: {
    'amazon.com': {
      contentType: ['javascript'],
      querystring: true,
    }
  },
  log:   {'amazon.com': {contentType}},
  html:  {'www.amazon.com':{response}},
  js:    {'amazon-adsystem.com':   ''},
}
module.exports = route;
