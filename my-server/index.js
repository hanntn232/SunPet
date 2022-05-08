const exress = require('express')
const app = exress()
const port = 3000;

const morgan = require('morgan')

//Http request legger
app.use(morgan('combined'));

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json());

//Enable CORS
const cors = require('cors')
app.use(cors());

//Connect DB
const db = require("./config/db")
db.connect();



app.listen(port, () => {
    console.log(`My server listening on port ${port}`)
})

//import router
const mainRouter = require('./router/main.router')
app.use("/", mainRouter)