import dotenv  from 'dotenv'
import express from 'express'
var   server = express();
const PORT   = process.env.PORT || 3030;

//setup middleware for JSON
server.use(express.json());

server.get('/', (req, res) => {
    res.send({"status": "200"})
})

server.get('/student/:username', (req, res) => {
    res.send({
        "status": "200",
        "userName": req.params.username
    })
})

server.get('/class/:classname', (req, res) => {
    res.send({
        "status": "200",
        "clasName": req.params.classname
    })
})

server.get('/class/:classname/syllabus/', (req, res) => {
    res.send({
        "status": "200",
        "clasName": req.params.classname         
    })
})

server.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`)
});