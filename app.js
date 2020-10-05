const express = require('express')
const dotenv = require('dotenv').

//load config
dotenv.config({ path: './config/config.env'})

//starting the server
const app = express()

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log('Server has started on port 5000'))