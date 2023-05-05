import dotenv  from 'dotenv'
import express from 'express'
var   server = express();
const PORT   = process.env.PORT || 3030;

//setup middleware for JSON
server.use(express.json());

server.get('/', (req, res) => {
    res.send({"status": "200"})
})

server.get('/student/:user', (req, res) => {
    res.send({
        "status": "200",
        "userName": req.params.user
    })
})

server.get('/class/:myclass', (req, res) => {
    res.send({
        "status": "200",
        "clasName": req.params.myclass
    })
})

server.get('/class/student/:id', (req, res) => {
    res.send({
        "status": "200",
        "studentid": req.params.id       
    })
})

server.listen(PORT, () => {
    console.log(`Server Running on Port: ${PORT}`)
});