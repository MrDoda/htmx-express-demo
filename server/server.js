import { store } from './store.js'
import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import { engine } from 'express-handlebars'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const port = 3000

// Set up Handlebars
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '..', 'public')))

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

app.get('/table', (req, res) => {
  res.render('table', {
    layout: false,
    day: 'Čtvrtek',
    headers: [
      '8:00',
      '9:00',
      '10:00',
      '11:00',
      '12:00',
      '13:00',
      '14:00',
      '15:00',
      '16:00',
      '17:00',
      '18:00',
      '19:00',
      '20:00',
    ],
    body: [
      [
        'Kurt 1',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
      ],
      [
        'Kurt 2',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
      ],
      [
        'Kurt 3',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
        '290,-',
      ],
    ],
  })
})
