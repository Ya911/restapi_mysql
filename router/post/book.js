
const express  = require("express")
const router = express.Router()
const query = require('../../control/all')

router.post("/book",async(req,res,next)=>query(next,res,`INSERT INTO books (${(req.query.name && req.query.yars && req.query.img && req.query.author && req.query.price) ? "name , yars , img , author , price ": false}) VALUES (${req.query.name || 'test'} , ${req.query.yars || null} , ${req.query.img || 'any'} , ${req.query.author || "NULL"} , ${req.query.price || null});`, "name , yars , img , author , price " , "post"));



module.exports = router;
