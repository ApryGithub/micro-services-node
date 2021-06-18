'use strict'

const server = require('./app')
const port = 2001

server.listen(port, () => {
  console.log(`LISTENING ${port}`)
})
