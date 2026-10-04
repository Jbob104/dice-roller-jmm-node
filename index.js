const express = require('express')
app = express()

const cors = require("cors")

var url = require('url');

const port = process.env.PORT || 3000
const majorVersion = 1
const minorVersion = 2

// Returns a successful message if request was not blocked by CORS
app.get('/cors-fail', (req, res) => {
	console.log('Calling "/cors-fail"')
	res.type('text/plain')
	res.send('CORS Success')
})

// Use Express to publish static HTML, CSS, and JavaScript files that run in the browser.
app.use(express.static(__dirname + '/static'))
app.use(cors({ origin: '*' }))

// The app.get functions below are being processed in Node.js running on the server.

// Returns version of server
app.get('/version', (request, response) => {
	console.log('Calling "/version" on the Node.js server.')
	response.type('text/plain')
	response.send('Version: '+majorVersion+'.'+minorVersion)
})

// Returns a ping response to wake up server
app.get('/api/ping', (request, response) => {
	console.log('Calling "/api/ping"')
	response.type('text/plain')
	response.send('ping response')
})

// Computes rolling a d4 die
app.get('/roll-d4', (req, res) => {
	console.log('Calling "/roll-d4" on Node.js server.')
	let roll = Math.floor(Math.random() * 4) + 1
	res.type('text/plain')
	res.send(roll.toString())
})

// Computes rolling a d6 die
app.get('/roll-d6', (req, res) => {
	console.log('Calling "/roll-d6" on Node.js server.')
	let roll = Math.floor(Math.random() * 6) + 1
	res.type('text/plain')
	res.send(roll.toString())
})

// Computes rollong a d8 die
app.get('/roll-d8', (req, res) => {
	console.log('Calling "/roll-d8" on Node.js server.')
	let roll = Math.floor(Math.random() * 8) + 1
	res.type('text/plain')
	res.send(roll.toString())
})

// Computes rolling a d10 die
app.get('/roll-d10', (req, res) => {
	console.log('Calling "/roll-d10" on Node.js server.')
	let roll = Math.floor(Math.random() * 10) + 1
	res.type('text/plain')
	res.send(roll.toString())
})

// Computes rolling a d12 die
app.get('/roll-d12', (req, res) => {
	console.log('Calling "/roll-d12" on Node.js server.')
	let roll = Math.floor(Math.random() * 12) + 1
	res.type('text/plain')
	res.send(roll.toString())
})

// Computes rolling a d20 die
app.get('/roll-d20', (req, res) => {
	console.log('Calling "/roll-d20" on Node.js server.')
	let roll = Math.floor(Math.random() * 20) + 1
	res.type('text/plain')
	res.send(roll.toString())
})

// Custom 404 page.
app.use((request, response) => {
  response.type('text/plain')
  response.status(404)
  response.send('404 - Not Found')
})

// Custom 500 page.
app.use((err, request, response, next) => {
  console.error(err.message)
  response.type('text/plain')
  response.status(500)
  response.send('500 - Server Error')
})

app.listen(port, () => console.log(
  `Express started at \"http://localhost:${port}\"\n` +
  `press Ctrl-C to terminate.`)
)
