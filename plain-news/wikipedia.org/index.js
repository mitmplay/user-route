const {resp} = global.mitm.fn;

const route = {
  js:   {'.*': {resp}},
  html: {'.*': {resp}},
}
module.exports = route;
