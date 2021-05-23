const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post('/', (req, res) => {
  res.send({
    filePath: req.body.path,
  })
})

module.exports = {
  path: '/deleteFile',
  handler: app,
}
