import dotenv from 'dotenv'
import express from 'express'
import { Courses } from './lib/college.js'

dotenv.config()

let mycourses = new Courses()
mycourses.addClass("OOP", 3) 
mycourses.addClass("OS", 4)
mycourses.addClass("English", 4)
console.dir(mycourses)
mycourses.sortAlpha()
console.dir(mycourses)
const test = process.env.HELLO_WORLD
const app = express()

//setup middleware for JSON
app.use(express.json())

// Listen at root endpoint
app.get('/', (req, res) => {
    // Return json 
    res.send({"MyCourses": mycourses.getByGrade("A")})
})

app.listen(process.env.PORT || 8080, () => {
    console.log("education-path-server:\nStatus: Runnning")
})