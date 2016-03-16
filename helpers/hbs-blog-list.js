var fs = require('fs');
var path = require('path');
var hbs = require('handlebars');
var jsyaml = require('yaml-front-matter');
var moment = require('moment');

var isTimeStamp = /^\d{8}/;
var isStatic = /\.static\.\w+$/;

var inputPath = './app/blog';
var outputPath = '/blog';

var sortDesc = (a,b) => (a.posted === b.posted) ? 0 : (a.posted < b.posted) ? 1 : -1;

var tmpl = hbs.compile(`
<div class="blog-summary">
  <h2 class="blog-summary__title"><a href='{{href}}'>{{title}}</a></h2>
  <ul class="blog-summary__byline">
    {{~#if author}}<li>by {{author}}</li>{{/if~}}
    {{~#if posted}}<li>posted {{postedFormated}}</li>{{/if~}}
  </ul>
  {{#if summary}}
  <p class="blog-summary__summary">
    {{summary}}
    <a href="{{href}}" class="blog-summary__read-more">Read more&hellip;</a>
  </p>
  {{/if}}
</div>`);

module.exports = function() {

  var posts = fs.readdirSync(inputPath)
    .filter( filename => isStatic.test(filename) )
    .filter( filename => isTimeStamp.test(filename) )
    .map( filename => path.join(inputPath, filename) )
    .map( filename => ({ buffer: fs.readFileSync(filename, "utf8"), filename: filename }) )
    .map( buffer   => ({ meta: jsyaml.loadFront(buffer.buffer), filename: buffer.filename } ))
    .map( parsed   => ({
      href: path.join(outputPath, path.basename(parsed.filename.replace(isStatic, '.html'))),
      title: parsed.meta.title || parsed.filename.replace(isTimeStamp, '').replace(isStatic, '').replace(/-/g, ' '),
      posted: +moment(parsed.meta.posted || parsed.filename.match(isTimeStamp), "YYYYMMDD"),
      postedFormated: moment(parsed.meta.posted || parsed.filename.match(isTimeStamp), "YYYYMMDD").format('LL'),
      summary: parsed.meta.summary,
      author: parsed.meta.author
    }) );

  // Sort into the order
  posts.sort(sortDesc);

  var result = posts.map(tmpl).join('');
  return new hbs.SafeString(result);
}
