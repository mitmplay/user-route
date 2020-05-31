const domain =  __dirname.split(/\\|\//).pop();
const {resp} = global.mitm.fn;

routes = {
  js:   {'.*': {resp}},
  html: {'.*': {resp}},
}
global.mitm.fn.routeSet(routes, domain, true)
