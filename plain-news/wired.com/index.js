const css = `
.ad--mid-content {
  display: none !important;
}\n`;

const route = {
  title: 'Wired - wired',
  url: 'https://www.wired.com/',
  html: {
    'pay.google.com': '',
    'news.google.com': '',
    'polarcdn-terrax.com': '',
  },
  css: {'wired.com': `=>${css}`},
  js:  {
    'demdex.net': '',
    'doubleclick.net': '',
    'doubleverify.com': '',
    'bounceexchange.com': '',
    'medtargetsystem.com': '',
    'amazon-adsystem.com':  '',
    'googlesyndication.com': '',
    'rubiconproject.com': '',
    'casalemedia.com': '',
    'googleapis.com': '',
    'akamaihd.net': '',
    'openx.net': '',
    'adnxs.com': '',
    'media.net': '',
    'turn.com': '',
    'hotjar.com': '',
    'indexww.com': '',
    'outbrain.com': '',
  },
}
module.exports = route;
