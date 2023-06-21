const express  = require("express")
const router = express.Router()
const query = require('../../control/all')


router.delete("/author",async(req,res,next)=>query(next,res,`DELETE FROM author WHERE id='${req.query.id_author || false }';`, "id_author" , "delete" ));
router.delete("/authors",async(req,res,next)=>query(next,res,`DELETE FROM author;`, null , "delete" ));


module.exports = router;
