const express  = require("express")
const router = express.Router()
const query = require('../../control/all')


router.put("/author",async(req,res,next)=>query(next,res,`UPDATE author SET ${(req.query?.target && req.query?.target.replace(/^"(.*)"$/, '$1') )|| false } = ${req.query.newValue || null}  WHERE author.id=${req.query.id};` , "target , newValue , id", "put" ));
module.exports = router