import dotenv from 'dotenv'
import express from 'express'
dotenv.config()
const test = process.env.HELLO_WORLD
const app = express()
const port =  process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send(test)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})