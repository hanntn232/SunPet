const express = require('express');
const router = express.Router();
const IDproduct = require("../model/product")
const IDblog = require("../model/blog")
const user = require('../model/user');

router.get('/', function(req, res) {
    res.send("Chào mừng bạn đến với Website SunPet")
})

module.exports = router;

//Get all product
router.get('/products', function(req, res) {
    IDproduct.find({}, function(err, data) {
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

// Get product by id
router.get('/:productId', async function(req,res) {
    // console.log(req.params.productId)
    try {
        const data = await IDproduct.findById(req.params.productId)
        res.json({ message: "success"})
    }
    catch (err) {
        res.json({message: err.message})
    }
})
// Insert product 
router.post("/products", async(req,res) => {
    // console.log("Data from client", req.body);
    // res.send("Server received!");

    let product = new IDproduct({
        ten: req.body.ten,
        giaGoc: req.body.giaGoc,
        giaBan: req.body.giaBan,
        hinhAnh: req.body.hinhAnh,
        danhMuc: req.body.danhMuc,
        moTa: req.body.moTa,

    })
    try{
        p = await product.save();
        res.json({message: "success"})
    }
    catch(err){
        res.json({message: err.message})
    }
})
// update product
router.patch(":/productId", async (req,res) => {
    try{
        await IDproduct.updateOne({id: req.params.productId},{
            $set: {ten: req.body.ten,
                giaGoc: req.body.giaGoc,
                giaBan: req.body.giaBan,
                hinhAnh: req.body.hinhAnh,
                danhMuc: req.body.danhMuc,
                moTa: req.body.moTa}
        })
        res.json({message: "success"})
    }
    catch(err){
        console.log(err.message);
        res.json({message:err.message});
    }
})
// Delete product
router.delete("/:productId", async (req,res) => {
    try{
        await IDproduct.deleteOne({id: req.params.productId});
        res.json({message: "success"})
    }
    catch (err){
        res.json({message:err.message})
    }
})

//Get all blogs
router.get('/blogs', function(req, res) {
    IDblog.find({}, function(err, data) {
        if (err) {
            res.send({ message: err.message })
        } else {
            res.send(data)
        }
    })
})

// Get blog by id
router.get('/:blogId', async function(req,res) {
    // console.log(req.params.blogId)
    try {
        const data = await IDblog.findById(req.params.blogId)
        res.json({ message: "success"})
    }
    catch (err) {
        res.json({message: err.message})
    }
})
// Insert blog
router.post("/blogs", async(req,res) => {
    // console.log("Data from client", req.body);
    // res.send("Server received!");

    let blog = new IDblog({
        date: req.body.date,
        title: req.body.title,
        content: req.body.content,
        image: req.body.image,
    })
    try{
        p = await blog.save();
        res.json({message: "success"})
    }
    catch(err){
        res.json({message: err.message})
    }
})
// update blog
router.patch(":/blogId", async (req,res) => {
    try{
        await IDblog.updateOne({id: req.params.blogId},{
            $set: {date: req.body.date,
                title: req.body.title,
                content: req.body.content,
                image: req.body.image}
        })
        res.json({message: "success"})
    }
    catch(err){
        console.log(err.message);
        res.json({message:err.message});
    }
})
// Delete blog
router.delete("/:blogId", async (req,res) => {
    try{
        await IDblog.deleteOne({id: req.params.blogId});
        res.json({message: "success"})
    }
    catch (err){
        res.json({message:err.message})
    }
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