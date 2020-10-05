const express = require('express')
const dotenv = require('dotenv').

//load config
dotenv.config({ path: './config/config.env'})

//starting the server
const app = express()

const PORT = process.env.PORT || 3000

app.listen(5000, console.log('Server has started on port 5000'))