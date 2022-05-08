const express = require('express');
const router = express.Router();
const product = require("../model/product")
const blog = require("../model/blog")
const user = require('../model/user');

router.get('/', function(req, res) {
    res.send("Chào mừng bạn đến với Website SunPet")
})

module.exports = router;

//Get all product
router.get('/products', function(req, res) {
    product.find({}, function(err, data) {
        if (err) {
            res.send({ message: err.message })
                // res.send("fail")
        } else {
            res.send(data)
                // console.log("not fail")
                // res.send("not fail")
        }
    })
})


//Get all blogs
router.get("/blogs", function(req, res) {
    blog.find({}, function(err, data) {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }
    })
})


//Get all users
router.get("/users", function(req, res) {
    user.find({}, function(err, data) {
        if (err) {
            res.send(err)
        } else {
            res.send(data)
        }
    })
})


//Insert user
//Insert product
router.post('/users', async function(req, res) {
    // console.log("Data from client: ", req.body)
    // res.send("Server đã nhận dữ liệu")
    let userImport = new user({
        role: req.body.role,
        ho: req.body.ho,
        ten: req.body.ten,
        sdt: req.body.sdt,
        diaChi: req.body.diaChi,
        matKhau: req.body.matKhau,
        token: req.body.token
    })

    try {
        p = await userImport.save();
        res.json({ message: "success" })
    } catch (err) {
        res.json({ message: err.message })
    }
})