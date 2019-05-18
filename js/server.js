/* eslint-disable no-console */
const express = require('express')
const favicon = require('serve-favicon')

const path = require('path')

const port = Number(process.env.JMSPORT || 8080)

const app = express()

app.listen(port, () => console.log(`Listening on port ${port}!`))

app.use('/', express.static('dist'))

app.use(favicon(path.join(__dirname, '..', 'dist', 'img', 'favicon.ico')))
app.get('/', (req, res) => {
  res.sendfile(`${__dirname}/index.html`, [], null)
})
