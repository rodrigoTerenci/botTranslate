import express from 'express'
import http from 'http'
i

const
    app = express(),
    server = http.createServer(app),
    port = process.env.PORT || 3000
    
     robo = robo().then((response)=> console.log(response.data))
    app.get('/',(req,res)=>
    res.send(robo)
    //res.render('index')
   )
   
  server.listen(port)
