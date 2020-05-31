const domain =  __dirname.split(/\\|\//).pop();

routes = {
  mock: {'2mdn.net': ''},
}
global.mitm.fn.routeSet(routes, domain, true)
