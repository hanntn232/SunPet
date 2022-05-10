const express = require('express');
const router = express.Router();
//import models
const Todo = require('../model/todo');
router.get('/', function(req, res) {
      res.send("Công việc đến rồi hãy vui vẻ làm việc");
})

//Get all todoitem
router.get('/todos', function(req, res){
      Product.find({}, function(err, data){
            if(err) {
                  res.json({message: err.message})
            } else{
                  res.json(data)
            }
      })
})
//get todoitem by id
router.get('/:todoID', async function (req, res) {
      // console.log(req.params.productId)
      try {
            const data = await Product.findById(req.params.productId)
            res.json(data)
      } catch (err) {
            res.json({ message: err.message })
      }
})
//insert todoitem
router.post("/todos",async function(req, res){
// console.log("Dara from client: ", req.body);
// res.send("Server received data!");
      let product = new Todo({
            name: req.body.name,
            task: req.body.task
      })
      try {
            p = await todo.save();
            res.json({message:"Success"})
      } catch (err) {
            res.json({ message: err.message })
      }
})

//update todoitem
router.patch("/:todoID", async (req, res) => {
      try {
            await Product.updateOne({ id: req.params.todoID }, {
                  $set: {name: req.body.name, task: req.body.task }
            })
            res.json({message:"Success"})

      } catch(err) {
            console.log(err.message);
            res.json({ message: err.message });
      }
})
//delete todoitem
router.delete("/:todoID", async(req,res)=>{
try{
      await Product.deleteOne({ id: req.params.todoID});
      res.json({message:"Success"})
}catch (err){
      res.json({message: err.message});
}
})
module.exports = router;
 