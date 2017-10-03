const snappy = require('./..')

const app = snappy()

app.get('/users', (req, res) => res.send('users get'))
app.post('/users', (req, res) => res.send('users post'))
app.on('put').handle('/users', (req, res) => res.send('users put'))
app.patch('/users', (req, res) => res.send('users patch'))

app.on('delete').handle('/users', (req, res) => res.send('users delete'))
app.on('options').handle('/users', (req, res) => res.send('users options'))

app.listen()
