const snappy = require('./..')

const app = snappy()

app.get('/users.json', (req, res) =>
	res.json([
		{
			name: 'tj',
			skills: ['c', 'go', 'node']
		},
		{
			name: 'ryan',
			skills: ['c', 'c++', 'node']
		}
	], 2))

app.listen(3000)
