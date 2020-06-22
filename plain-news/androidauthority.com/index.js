const androidAuthJS = function() {
  const c = q=>document.querySelectorAll(q).forEach(n=>n.remove());
  c('.aa_srma_container.shortcodes_wrapper');
  c('.aa_header_hero');
  c('.center-ad');
};

const css = ` 
.content-panel .loop-info-wrapper,
.content-panel .loop-info-wrapper .loop-info {
  height: auto !important;
}
a[href="#polls"],
.widgets-wrapper,
#scrolled_view_bar,
.aa_srma_container,
.loop-image-wrapper,
.shortcodes_wrapper,
#footer .container-inner,
.aa-post-poll-ajax-content,
.scrolled_view_bar_container {
  display: none !important;
}
.loop-panel.content-panel {
  margin-bottom: 20px !important;
}
.content-has-sidebar .single-post-selector {
  width: 100% !important;
}
#footer {
  padding-top: 0px !important;
  background-color: white !important;
}\n`;

const route = {
  title: 'Androidauthority - androidauthority',
  url: 'https://www.androidauthority.com/',
  headers: {
    'disqus.com/embed/comments/': {
      'referrer-policy': 'no-referrer-when-downgrade'
    }
  },
  skip: ['wp-admin'],
  html: {
    'www.androidauthority.com': {
      el: 'e_end', //JS at end of 
      js: [androidAuthJS], //html body
    },
  },
  css: {'style.min.css': `=>${css}`},
  js: {
    'taboola.com':          '',
    'googletagmanager.com': '',
    'amazon-adsystem.com':  '',
    'unknowncrate.com':     '',    
    'doubleclick.net':      '',
    'stack-sonar.com':      '',
    'quantserve.com':       '',
    'cookiebot.com':        '',
    'crazyegg.com':         '',
    'tpdads.com':           '',
    'gleam.io':             '',
  },
}
module.exports = route;
