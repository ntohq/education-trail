/*******************************************/
/*              Node Packages              */
/*******************************************/
import * as ServerConfig from './config.js'
import axios from 'axios'
// Server configuration module
import express from 'express'
    // ExpressJs, a node server
import dotenv from 'dotenv'
    // dotenv handles all environment variables
import mongoose from 'mongoose';
    // MongoDB NodeJs library
import { google } from 'googleapis'
    // Google library for Oauth2.0
import User from './Users/index.js'

const app = express()
mongoose.connect(ServerConfig.MONGO_URI)

app.get("/v1/user/add/:id", async (req, res, next) => {
    try {
        let user = new User({
            nick_name: "Wessi",
            full_name: "Wesley Ford",
            email: "wes@wesdev.pro",
            beta_tester: true,
        })
        await user.save().then(() => {
            res.sendStatus(200)
        })
    } catch(error) {
        next(error)
        res.sendStatus(403)
    }

})

app.listen(ServerConfig.PORT, () => {
    console.log(`Listening on port ${ServerConfig.PORT}`)
})