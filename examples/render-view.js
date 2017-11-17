const path = require('path')
const snappy = require('./..')

const app = snappy()

app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res) => {
	res.render('index.html')
})

app.listen()
