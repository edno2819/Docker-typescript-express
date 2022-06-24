import express from 'express'
import cors from 'cors'
import routes from './routes'

var app = express()

const PORT = 3000
const HOST = '0.0.0.0'

app.use(cors())
app.use(routes)

app.listen(PORT, HOST)