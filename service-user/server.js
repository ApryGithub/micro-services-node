'use strict'

const server = require('./app')
const port = 2002

server.listen(port, () => {
  console.log(`LISTENING ${port}`)
})
