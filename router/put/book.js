const express  = require("express")
const router = express.Router()
const query = require('../../control/all')



router.put("/book",async(req,res,next)=>query(next,res,`UPDATE books SET ${(req.query?.target && req.query?.target?.replace(/^"(.*)"$/, '$1')) || false }= ${req.query.newValue || null} WHERE books.id=${req.query.id};` , "target , newValue" , "put" ));
module.exports = router

