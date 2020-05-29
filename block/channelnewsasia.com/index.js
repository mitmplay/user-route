const domain =  __dirname.split(/\\|\//).pop();

const css = `
[data-css='c-advertisement'] {
  display: none !important;
}`

routes = {
  html: {
    'facebook.com': '',
  },
  js: {
    'imrworldwide.com': '',
    'doubleclick.net': '',
    'facebook.net': '',
    'outbrain.com': '',
    'addthis.com': '',
    'twitter.com': '',
    'cxense.com': '',
    'demdex.net': '',
  },
  css: {
    'styles.css': `=>${css}`
  },  
}

global.mitm.fn.routeSet(routes, domain, true)

