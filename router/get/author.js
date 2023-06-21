const createError = require('http-errors')
const express  = require("express")
const router = express.Router()
const query = require('../../control/all')


router.get("/author",async(req,res,next)=>query(next,res,`SELECT * FROM author WHERE name LIKE '${req.query.author || false }%';`, "author" ));
router.get("/authors",async(req,res,next)=>query(next,res,`SELECT * FROM author;`, null ));
module.exports = router;
