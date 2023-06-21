const express  = require("express")
const router = express.Router()
const query = require('../../control/all')

router.delete("/book",async(req,res,next)=>query(next,res,`DELETE FROM books WHERE id='${req.query.id_book || false }';`, "id_book" , "delete" ));
router.delete("/books",async(req,res,next)=>query(next,res,`DELETE FROM books;`, null , "delete" ));

module.exports = router;
