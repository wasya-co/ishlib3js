
const settings = {
  APP_ENV: 'development_web',
  apiOrigin: "http://localhost:3001",

  domain: "tgm.piousbox.com", // required! 20210831
  debug: false,

  GOOGLE_MAPS_KEY: 'AIzaSyCPzonnRCpTIUJauMMQcL3k69Vm5O8vz3M',

  homePath: "/en/locations/show/root",

  REACT_ENV: 'development_web',
  requireLogin: false,

  stripePublicKey: 'pk_test_qr1QPmSpLdBFt1F7itdWJOj3',
};

const defaultSettings = {} // require('../default.js')
export default { ...defaultSettings, ...settings }

