/*******************************************/
/*              Node Packages              */
/*******************************************/
import * as ServerConfig from './config.js'
import axios from 'axios'
// Server configuration module
import cookieHeaderParser from './util.js'
import express from 'express'
    // ExpressJs, a node server
import cors from 'cors'
    // ExpressJs middleware for handling cors
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
    // dotenv handles all environment variables
import mongoose from 'mongoose';
    // MongoDB NodeJs library
import { google } from 'googleapis'
    // Google library for Oauth2.0
import User from './Users/index.js'

const app = express()

app.use(cors())
app.use('/v1/user/auth', bodyParser.urlencoded({
    extended: true
}))

const oauth2Client = new google.auth.OAuth2(
    ServerConfig.GOOGLE_CLIENT_ID,
    ServerConfig.GOOGLE_CLIENT_SECRET,
    'http://localhost:3000/login'
)


const scopes = [
    'profile',
    'email'
]


app.post('/v1/user/auth', async (req, res, next) => {
    let { tokens } = await oauth2Client.getToken(req.body.code)
    console.log(tokens)
    res.status(200).send(tokens)
})


app.get('/v1/user/ps-data', async (req, res, next) => {
    let parsedHeaders = cookieHeaderParser(req.headers.cookie)

    parsedHeaders['_token'] = parsedHeaders['_token'].replace('Bearer%20', '')

    oauth2Client.setCredentials({'access_token': parsedHeaders['_token']})

    let oauth2 = google.oauth2({
        auth: oauth2Client,
        version: 'v2'
    })

    oauth2.userinfo.get().then(async (response) => {
        let userData = response.data

        userData.picture = await axios.get(userData.picture, { responseType: "arraybuffer" }).then((imageRes) => {
                return  'data:' + imageRes.headers["content-type"] + ";base64," + Buffer.from(imageRes.data).toString('base64')
            }
        )

        console.log(userData)
        res.status(200).send(userData)
    })
})
// console.log(authorizationUrl)

// app.get("/v1/user/auth", async (req, res, next) => {
//     let { tokens } = await oauth2Client.getToken(req.query.code)
//     oauth2Client.setCredentials(tokens)
    
    // let oauth2 = google.oauth2({
    //     auth: oauth2Client,
    //     version: 'v2'
    // })

//     oauth2.userinfo.get().then((response) => {
//         console.log(response.data)
//         try {
//             let user = new User({
//                 nick_name: response.data.given_name,
//                 full_name: response.data.family_name,
//                 email: response.data.email,
//                 beta_tester: true,
//                 oAuthId: response.data.id
//             })
//             user.save().then(() => {
//                 res.status(200).send({stats: "It Worked!"})
//             })
//         } catch(er) {
//             console.log(error)
//         }
//     }).catch((error) => {
//         console.log(error)
//         res.sendStatus(400)
//     })
// })

app.get("/", (req, res) => {
    res.sendStatus(404)
})

app.listen(ServerConfig.PORT, () => {
    mongoose.connect(ServerConfig.MONGO_URI)
    console.log(`Listening on port ${ServerConfig.PORT}`)
})