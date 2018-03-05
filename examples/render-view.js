const path = require('path')
const snappy = require('./..')

const app = snappy()

app.get('/', (req, res) => {
	res.render('index.html')
})

app.listen(3000)
