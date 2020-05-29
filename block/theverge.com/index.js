const {
  resp,
  routeSet,
  stringify,
} = global.mitm.fn;

const domain =  __dirname.split(/\\|\//).pop();

routes = {
  title: 'The Verge - theverge',
  url: 'https://www.theverge.com/',  
  js: {},
}
routes.js[domain] = {resp};
routeSet(routes, domain, true)
