const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

app.listen(process.env.PORT || 1996, function() {
  console.log("Server up and running on port 1996")
})
