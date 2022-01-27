import express from 'express'
import http from 'http'
import { renderFile } from 'ejs'

const
    app = express(),
    server = http.createServer(app),
    port = process.env.PORT || 3000
    app.engine('html', renderFile)
    app.get('/',(req,res)=>
        //res.send(index)
        res.render('./index.html')
    )
   
  server.listen(port)
