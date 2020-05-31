const domain =  __dirname.split(/\\|\//).pop();

const css = `
.c-entry-hero__meta,
.l-col__sidebar,
.u-desktop-only,
.m-ad {
  display: none !important;
}\n`;

routes = {
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
global.mitm.fn.routeSet(routes, domain, true)
