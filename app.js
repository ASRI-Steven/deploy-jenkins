require('dotenv').config()
const express = require('express')
var cors = require('cors')
var app = express()

const port = 3000
app.use(cors())

app.get('/hello', (req, res) => {
  res.send(process.env.HELLO || 'sddffddssd')
})

app.get('/world', (req, res) => {
  res.send(process.env.WORLD || 'World')
})

app.get('/haha', (req, res) => {
  res.send("haha")
})

app.get('/hehe', (req, res) => {
  res.send("hs")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
