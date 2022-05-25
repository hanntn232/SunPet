const express = require('express')
const app = express()
const port = 3000;
const path = require("path")
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

const webPush = require('web-push')


app.use(express.static(path.join(__dirname, '/images')))

//Connect DB
const db = require("./config/db")
db.connect();


//API: Push notification
app.listen(port, () => {
    console.log(`My server listening on port ${port}`)
})
app.post("/push", (req, res) => {
        let info = req.body;
        res.set('Content-Type', 'application/json');
        webPush.setVapidDetails(
            "mailto: quynhptn@gmail.com",
            "BJm-yUuPfWmTyMhHcIO6xtieZ3cssMAAJedHTRrHuWdZMYtjQ6Gbw3r6QIjMDWzBFiE-MJKQ4edx-EX481Kp1mc",
            "FCy_JQfY7BGkrlPv6vNvO3YQeofB0u6yQlUu4hL9nuE"
        );
        let notifiData = JSON.stringify({
            "notification": {
                "title": "Bạn đã xóa sản phẩm thành công",
                "body": "Sale off 50%",
                "icon": "https://www.pngitem.com/pimgs/m/508-5084634_image-result-for-tick-icon-circle-hd-png.png"
            }
        });
        Promise.resolve(webPush.sendNotification(info, notifiData))
            .then(() => {
                res.json({ message: "Success!" })

            })
            .catch((err) => {
                res.json({ message: err.message })
            })
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