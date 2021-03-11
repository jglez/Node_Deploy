require('dotenv').config()

// Import Path from Node.js
const path = require('path')

console.log('it works!!!')

const express = require('express')

// Initialize server
const server = express()

// parse JSON bodies
server.use(express.json())

// Tell Express where our static assets are regardless of machine
server.use(express.static(path.join(__dirname, 'client/build')))

// console.log(process.env.NODE_ENV)

// Cors conditional
// on Heroku machine, an env var is called "NODE_ENV" -> "production"
if (process.env.NODE_ENV === 'development') {

  // Import cors
  const cors = require('cors')

  // Use cors
  server.use(cors())
}

// API comes earlier in the pipeline
server.get('/api/hello', (req, res) => {
  res.json({ message: 'hello' })
})

// Catch all endpoint that just sends back index.html
server.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
})

// Fallback port
const PORT = process.env.PORT || 4000

server.listen(PORT, () => {
  console.log(`listening on ${PORT}`)
})

// Serve React app using express