const domain =  __dirname.split(/\\|\//).pop();

css = `
article>strong,
.adsbygoogle,
#main>div {
  display: none !important;
}`

routes = {
  title: 'Phoronix - phoronix',
  url:  'https://www.phoronix.com/scan.php?page=phoronix_articles',
  skip: ['ad.doubleclick.net/ddm/'     ],
  mock: {'phoronix.com/favicon.ico': ''},
  html: {'doubleclick.net':          ''},
  css:  {'phoronix.com':     `=>${css}`},  
}
global.mitm.fn.routeSet(routes, domain, true)
