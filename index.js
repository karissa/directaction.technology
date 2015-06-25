var templater = require('a-simple-templater')
var fs = require('fs')
var Handlebars = require('handlebars')

var posts = require('./posts.js')

var routes = [
  {
    url: '/post/:id',
    template: fs.readFileSync('post.html').toString(),
    data: function (params, cb) {
      posts.forEach(function (post) {
        if (post.id === parseInt(params.id)) {
          return cb(post)
        }
      })
    },
  },
  {
    url: '/',
    template: fs.readFileSync('blog.html').toString(),
    data: function (params, cb)  {
      cb({
        posts: posts
      })
    }
  }
]

Handlebars.registerHelper('overview', function(passedString) {
  var endIndex = passedString.indexOf('<!-- more -->')
  if (endIndex === -1) endIndex = 300
  var theString = passedString.substring(0, endIndex);
  theString += "..."
  return new Handlebars.SafeString(theString)
});

Handlebars.registerHelper('render', function(string) {
  return new Handlebars.SafeString(string);
})

templater('#content', routes, function (source, data) {
  var template = Handlebars.compile(source)
  return template(data)
})
