require('@babel/register')({
  presets: ['@babel/preset-react'],
})

const express = require('express')
const React = require('react')
const userRouter = require('./routes/user')

const app = express()
const expressWs = require('express-ws')(app)
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// websocket setup
const websocket = expressWs.getWss('/websocket')
app.ws('/websocket', function (ws, req) {})

// routes
app.use('/form/user', userRouter(websocket))

// server start
app.listen(8080, () => {
  console.log(`Server is running on port ${8080}`)
})
