const express  = require("express")
const router = express.Router()
const query = require('../../control/all')

router.get("/book",async(req,res,next)=>query(next,res,`SELECT * FROM books WHERE name LIKE '${req.query.book || false }%';`, "book" ));
router.get("/books",async(req,res,next)=>query(next,res,`SELECT * FROM books;`, null ));
module.exports = router;

