import * as ServerConfig from '../config.js'
    // Server Config
import mongoose from 'mongoose';
    // MongoDB NodeJs library

const UserClasses = new mongoose.Schema([
    {
        name: String,
        grades: {
            current: Number,
            needed: Number,
            goal: Number
        },
        creditHours: Number,
        assignment: {
            types: [
                {
                    name: String,
                    weight: Number,
                    id: Number
                }
            ],
            graded: [
                {
                    name: String,
                    type: String,
                    id: Number,
                    grade: Number
                }
            ],
        }
    }
])

const UserSchema = new mongoose.Schema({
    oAuthId: String,
    full_name: String,
    nick_name: {
        type: String
    },
    email: String,
    userOauthIs: Number,
    beta_tester: Boolean,
    gpa: {
        current: Number,
        goal: Number
    },
    credits_earned: Number,
    credits_needed: Number,
    classes: UserClasses
})

export default mongoose.model('education-data', UserSchema, 'education-data')