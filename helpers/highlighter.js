var Prism = require('prismjs');
require('prismjs/components/prism-scss');

module.exports = function highlighter(code, lang, callback) {
  var language = Prism.languages[lang];
  callback(null, language ? Prism.highlight(code, language) : code);
}
