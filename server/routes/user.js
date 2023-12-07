const express = require('express')
const router = express.Router()
const React = require('react')
const { renderToStaticMarkup } = require('react-dom/server')
const FormName = require('../components/FormName')
const store = require('../store')

const userRouter = (websocket) =>
  router.post('/', (req, res) => {
    store.set({ ...req.body })

    if (store.db.name && store.db.lastName) {
      store.set({
        userId: String(
          store.db.name.substring(0, 2) +
            store.db.lastName.substring(0, 2) +
            Math.floor(Math.random() * 99)
        ).toUpperCase(),
      })
    }

    websocket.clients.forEach(function (client) {
      client.send(
        renderToStaticMarkup(
          <div hx-swap-oob="afterbegin:#timeline">
            {JSON.stringify(store.db)}
          </div>
        )
      )
    })

    res.send(renderToStaticMarkup(<FormName />))
  })

module.exports = userRouter
