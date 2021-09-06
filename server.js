import express from 'express'
import http from 'http'
const
    app = express(),
    server = http.createServer(app),
    port = process.env.PORT || 3000

    app.get('/',(req,res)=>
    res.send("Hello Worldfd")
   )
   
  server.listen(port)
