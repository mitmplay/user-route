const domain =  __dirname.split(/\\|\//).pop();

const contentType = ['json'];
const resp = function({body}) {
  body = (body+'').replace(/iframe/g, 'div');
  return {body}
}

routes = {
  title: 'Amazon - amazon',
  url:  'https://www.amazon.com/b?node=229189',
  sshot: 'button[type=submit],a[role=button]',
  cache: {'amazon.com': {contentType: ['javascript']}},
  log:   {'amazon.com': {contentType}},
  html:  {'www.amazon.com':    {resp}},
  js:    {'amazon-adsystem.com':   ''},
}
global.mitm.fn.routeSet(routes, domain, true)
