const domain =  __dirname.split(/\\|\//).pop();

const headerCSP = function({headers}) {
  const val = ' blob: ws://localhost:3000 ';
  const csp = headers['content-security-policy'];
  if (csp) {
    headers['content-security-policy'] = csp[0].replace(/ blob: /g, val);
  }
  return {headers};
};

const unregisterJS = function() {
  document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
      navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for(let registration of registrations) {
        registration.unregister()
      }});
      console.log('unregister service worker')
    }, 1000)
  })
};

const {html5vid} = mitm.fn;

const routes = {
  title: 'Twitter - twitter',
  url: 'https://www.twitter.com/search?q=covid&src=typed_query',
  sshot: 'button[type=submit],a[role=button]',
  mock: {
    'mitm-play/twitter.js': {
      js: [unregisterJS],
    },
  },
  cache: {
    // 'abs.twimg.com': {
    //   contentType: ['javascript'], // cache invalid
    //   hashQstring: true,
    // },
    'video.twimg.com': {
      contentType: ['mpegURL', 'MP2T'],
      resp: html5vid,
    },
  },
  log: {
    'api.twitter.com': {
      contentType: ['json']
    },
  },  
  html: {
    'twimg.com': 0,
    'twitter.com': {
      resp: headerCSP,
      src:['twitter.js'],
    },
  },
}

global.mitm.fn.routeSet(routes, domain, true)
//mitm-play twi --chromium='D:\Apps\chrome-gog\chrome.exe' -cspr='.'
