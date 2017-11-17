const snappy = require('./..')

const app = snappy()

app.get('/users', (req, res) => {
  res.send('users get')
})

app.post('/users', (req, res) => res.send('users post'))

app.on('delete')
  .handle('/users', (req, res) =>
    res.send('users delete'))

app.listen()
