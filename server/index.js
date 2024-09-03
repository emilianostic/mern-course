import express from 'express';
import {connectDB} from './db.js'

const app = express()

connectDB()

app.listen(3000)
console.log('server in running on port', 3000)