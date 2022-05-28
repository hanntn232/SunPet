const express = require('express')
const app = express()
const port = 3000;
const path = require("path")
const morgan = require('morgan');
const multer = require("multer");
const IDproduct = require("./model/product")

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
}).array("files", 3);


// update product
app.patch("/products/:id", async(req, res) => {
    try {
        upload(req, res, async(err) => {
            if (req.body.files != '') {
                if (err) {
                    res.json({ message: err.message });
                } else {
                    var filesArray = [];
                    for (let i = 0; i < req.files.length; i++) {
                        const file = req.files[i].filename
                        filesArray.push(file);
                    }
                    if (req.body.hinhAnh == null) {
                        var hinhAnhArray = []
                    } else {
                        hinhAnhArray = req.body.hinhAnh.split(',')
                            // var hinhAnhArray = JSON.parse(req.body.hinhAnh)[0];
                            // console.log("so luong anh: ", hinhAnhArray)
                    }
                    Array.prototype.push.apply(hinhAnhArray, filesArray);
                    // console.log("File received:", hinhAnhArray)
                    // console.log(req.body);
                    // console.log("Files length: ", filesArray)
                    await IDproduct.updateOne({ id: req.params.id }, {
                        $set: {
                            ten: req.body.ten,
                            giaGoc: req.body.giaGoc,
                            giaBan: req.body.giaBan,
                            danhMuc: req.body.danhMuc,
                            hinhAnh: hinhAnhArray,
                            moTa: req.body.moTa
                        }
                    })
                    res.json({ message: "Success" });
                }
            } else {
                var filesArray = [];
                for (let i = 0; i < req.files.length; i++) {
                    const file = req.files[i].filename
                    filesArray.push(file);
                }
                if (req.body.hinhAnh == '') {
                    var hinhAnhArray = []
                } else {
                    hinhAnhArray = req.body.hinhAnh.split(',')
                        // var hinhAnhArray = JSON.parse(req.body.hinhAnh)[0];
                        // console.log("so luong anh: ", hinhAnhArray)
                }
                Array.prototype.push.apply(hinhAnhArray, filesArray);
                // console.log("File received:", hinhAnhArray)
                // console.log(req.body);
                // console.log("Files length: ", filesArray)
                await IDproduct.updateOne({ id: req.params.id }, {
                    $set: {
                        ten: req.body.ten,
                        giaGoc: req.body.giaGoc,
                        giaBan: req.body.giaBan,
                        danhMuc: req.body.danhMuc,
                        hinhAnh: hinhAnhArray,
                        moTa: req.body.moTa
                    }
                })
                res.json({ message: "Success" });
            }

        });
    } catch (err) {
        // console.log(err.message);
        res.json({ message: err.message });
    }
})

// Insert product 
app.post("/products", async(req, res) => {
    // console.log("Data from client", req.body);
    // res.send("Server received!");
    try {
        upload(req, res, async(err) => {
            // console.log("Dữ liệu files 2: ", req.body)
            if (req.body.files != '') {
                if (err) {
                    res.json({ message: err.message });
                } else {
                    var filesArray = [];
                    for (let i = 0; i < req.files.length; i++) {
                        const file = req.files[i].filename
                        filesArray.push(file);
                    }
                    if (req.body.hinhAnh == "") {
                        var hinhAnhArray = []
                    } else {
                        hinhAnhArray = req.body.hinhAnh.split(',')
                            // var hinhAnhArray = JSON.parse(req.body.hinhAnh)[0];
                            // console.log("so luong anh: ", hinhAnhArray)
                    }
                    Array.prototype.push.apply(hinhAnhArray, filesArray);
                    // console.log("File received:", hinhAnhArray)
                    // console.log(req.body);
                    // console.log("Files length: ", filesArray)
                    let product = new IDproduct({
                        id: req.body.id,
                        ten: req.body.ten,
                        giaGoc: req.body.giaGoc,
                        giaBan: req.body.giaBan,
                        hinhAnh: req.body.hinhAnh,
                        danhMuc: req.body.danhMuc,
                        moTa: req.body.moTa,
                        hinhAnh: hinhAnhArray
                    })
                    try {
                        p = await product.save();
                        res.json({ message: "success" })
                    } catch (err) {
                        res.json({ message: err.message })
                    }
                }
            } else {
                res.json({ message: 'Bạn phải upload ảnh!' })
            }
        });
    } catch (err) {
        // console.log(err.message);
        res.json({ message: err.message });
    }
})

//import router
const mainRouter = require('./router/main.router')
app.use("/", mainRouter)