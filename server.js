const express = require('express')
const http = require('http')
const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackConfig = require('./webpack.config.js')

const app = express()
const server = http.createServer(app)

app.use(webpackDevMiddleware(webpack(webpackConfig)))

app.get('/click', (req, res) => {
    console.log('in route')
    res.send('here is some text')
})

app.use(express.static(__dirname + '/public'))

server.listen(3000, () => console.log('Listening on 3000'))
