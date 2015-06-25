var fs = require('fs')

module.exports = [
  {
    id: 1,
    author: "Karissa McKelvey",
    text: fs.readFileSync("posts/testpost.html").toString()
  },
  {
    id: 2,
    author: "Karissa McKelvey",
    text: fs.readFileSync("posts/testpost.html").toString()
  }
]