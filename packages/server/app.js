import dotenv from 'dotenv'
import express from 'express'
dotenv.config()
const test = process.env.HELLO_WORLD
const app = express()

//setup middleware for JSON
app.use(express.json())

// Listen at root endpoint
app.get('/', (req, res) => {
    // Return json 
    res.send({"myMessage": test})
})

app.listen(process.env.PORT || 8080, () => {
    console.log("education-path-server:\nStatus: Runnning")
})