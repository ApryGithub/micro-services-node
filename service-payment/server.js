'use strict'

const server = require('./app')
const port = 2003

server.listen(port, () => {
  console.log(`LISTENING ${port}`)
})
