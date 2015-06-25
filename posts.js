var fs = require('fs')

module.exports = [
  {
    id: 'free-as-in-freedom',
    text: fs.readFileSync("./posts/freeasinfreedom.html").toString()
  },
  {
    id: 'test-post',
    text: fs.readFileSync("./posts/testpost.html").toString()
  }
]