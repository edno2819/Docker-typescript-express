import express from 'express'
import cors from 'cors'
import routes from './routes'

import path from 'path'
import fs from 'fs'
import http from 'http'
import https from 'https'

var app = express()

const key = fs.readFileSync(path.join(__dirname, 'certs/selfsigned.key'))
const cert = fs.readFileSync(path.join(__dirname, 'certs/selfsigned.crt'))

const PORT = process.env.PORT || 3000
const HOST = '0.0.0.0'

app.use(cors())
app.use(routes)

app.listen(PORT, HOST)