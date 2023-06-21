const express  = require("express")
const router = express.Router()
const query = require('../../control/all')



router.post("/author",async(req,res,next)=>query(next,res,`INSERT INTO author (${(req.query.name && req.query.old) ? "name" + "," + "old" : false}) VALUES (${req.query.name || null} , ${req.query.old || null});` , "name , old" , null ));




module.exports = router;





// router.post("/author",async(req,res,next)=>query(
//     next,res,`INSERT INTO author * VALUES NULL , "alqdis" , "2015" , "https://kfjkdfjlkdfljkfd.img" , NULL , "50" ` ,
//      "id_author" , null ));