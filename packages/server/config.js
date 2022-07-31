import dotenv from 'dotenv'
dotenv.config()

export const GOOGLE_CLIENT_ID =  process.env.GOOGLE_CLIENT_ID
export const GOOGLE_CLIENT_SECRET =  process.env.GOOGLE_CLIENT_SECRET
export const SERVER_ROOT_URI =  process.env.SERVER_ROOT_URI || "http://localhost:3000"
export const UI_ROOT_URI =  process.env.UI_ROOT_URI || "http://localhost:8080"
export const JWT_SECRET =  'sshhhhh'
export const COOKIE_NAME =  'auth_token'
export const PORT =  process.env.PORT || 3000
export const MONGO_URI = process.env.MONGO_URI
