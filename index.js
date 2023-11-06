const express = require('express');
const server = express();

server.use(express.static("public"))
server.set('view engine', 'ejs');
server.set('views', './views')

const port = 5001;
server.get("/", function (req, res) {
    return res.render("frontend/layout/home");
})

server.get("/about", function (req, res) {
    return res.send(` 
              <h2> hellow about </h2> 
         `)
})

server.get("/contact", function (req, res) {
    return res.send(` 
              <h2> hellow contact </h2> 
         `)
})

server.listen(port , ()=>{
    console.log(`app is listening on http://127.0.0.1:${port}`);
})

