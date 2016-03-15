var fs = require('fs');
var hbs = require('handlebars');

var isTimeStamp = /^\d{8}/;
var isStatic = /\.static\.\w+$/;

var sortDesc = (a,b) => (a === b) ? 0 : (a < b) ? 1 : -1;

module.exports = function() {

  var posts = fs.readdirSync('./app/blog')
    .filter( f => isStatic.test(f) )
    .filter( f => isTimeStamp.test(f) );

  // Sort into the order
  posts.sort(sortDesc);

  var result = posts.map(function(fn) {
    var renderedFn = fn.replace(isStatic, '.html');
    var shortname = fn.replace(isTimeStamp, '').replace(isStatic, '').replace(/-/g, ' ');
    return `<li><a href='/blog/${renderedFn}'>${shortname}</a></li>`;
  }).join('');

  return new hbs.SafeString(result);
}
