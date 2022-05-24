const exress = require('express')
const app = exress()
const port = 3000;

const morgan = require('morgan');
const multer = require("multer");

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

// create storage
var storage = multer.diskStorage({
    destination: "images",
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    },
});
let maxSize = 10 * 1024 * 1024; //10MB
var upload = multer({
    storage: storage,
    limits: {
        fileSize: maxSize,
    },
}).single("file");

//API upload file
app.post("/upload", (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.json({ message: err.message });
        } else {
            console.log("File received:", req.file.filename);
            res.json({ message: "Success!" });
        }
    });
});