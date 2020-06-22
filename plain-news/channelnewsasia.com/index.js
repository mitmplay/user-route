const css = `
[data-css='c-advertisement'] {
  display: none !important;
}`

const route = {
  title: 'Channel News Asia - channelnewsasia',
  url: 'https://www.channelnewsasia.com/',  
  html: {'facebook.com':       ''},
  css:  {'styles.css': `=>${css}`},
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
}
module.exports = route;
