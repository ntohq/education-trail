import dotenv from 'dotenv'
import express from 'express'
dotenv.config()
const test = process.env.HELLO_WORLD
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send({"myMessage": test})
})

app.listen(process.env.PORT || 8080, () => {
    console.log("education-path-server:\nStatus: Runnning")
})