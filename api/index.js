const express = require('express')
const app = express()
const multer = require('multer')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const fs = require('fs')
const path = require('path')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'content/data/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  },
})

var upload = multer({ storage: storage })

app.post('/', upload.single('file'), (req, res, next) => {
  res.send({
    data: req.file.originalname,
  })
  //   next()
})

module.exports = {
  path: '/uploadCSV',
  handler: app,
}
