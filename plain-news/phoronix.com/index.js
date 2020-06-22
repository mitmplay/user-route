css = `
article>strong,
.adsbygoogle,
#main>div {
  display: none !important;
}`

const route = {
  title: 'Phoronix - phoronix',
  url:  'https://www.phoronix.com/scan.php?page=phoronix_articles',
  skip: ['ad.doubleclick.net/ddm/'     ],
  mock: {'phoronix.com/favicon.ico': ''},
  html: {'doubleclick.net':          ''},
  css:  {'phoronix.com':     `=>${css}`},  
}
module.exports = route;
