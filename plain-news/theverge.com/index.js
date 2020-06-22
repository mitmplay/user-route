const css = `
.c-entry-hero__meta,
.l-col__sidebar,
.u-desktop-only,
.m-ad {
  display: none !important;
}\n`;

const route = {
  title: 'The Verge - theverge',
  url: 'https://www.theverge.com/',
  css: {'theverge.com': `=>${css}`},  
  js:  {
    'digitaloceanspaces.com': '',
    'amazon-adsystem.com':  '',
    'rubiconproject.com': '',
    'googleapis.com': '',
    'outbrain.com': '',
    'openx.net': '',
    'adnxs.com': '',
    '3lift.com': '',
  },
}
module.exports = route;
