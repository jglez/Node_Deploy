require('dotenv').config()

console.log('it works!!!')

const express = require('express')

// Initialize server
const server = express()

// parse JSON bodies
server.use(express.json())

// console.log(process.env.NODE_ENV)

// Cors conditional
// on Heroku machine, an env var is called "NODE_ENV" -> "production"
if (process.env.NODE_ENV === 'development') {

  // Import cors
  const cors = require('cors')

  // Use cors
  server.use(cors())
}