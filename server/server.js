const express = require("express")
const cors = require("cors")
const app = express()
const port = 8000

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())

require('./config/mongoose.config')

const Routes = require('./routes/pirate.routes')
Routes(app)



app.listen(port, () => console.log(`Welcome to the Death Star Bridge: ${port} `))