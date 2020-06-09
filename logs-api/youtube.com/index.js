const domain =  __dirname.split(/\\|\//).pop();

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

const {
  routeSet,
  html5vid,
} = mitm.fn;

const routes = {
  title: 'Youtube - twitter',
  url: 'https://www.youtube.com',
  mock: {
    'mitm-play/youtube.js': {
      js: [unregisterJS],
    },
  },
  cache: {
    'googlevideo.com': {
      contentType: ['mp4', 'webm'],
      querystring: true,
    },
  },
}

global.mitm.fn.routeSet(routes, domain, true)
// global.mitm.fn.routeSet({css: {'.*': 0}}, 'default', true)
//mitm-play twi --chromium='D:\Apps\chrome-gog\chrome.exe' -cspr='.'
