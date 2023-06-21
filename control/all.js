const createError = require('http-errors')
const {query , coonect} = require('../lib/db')

module.exports = async(next , res , command , queryname , method = null)=>{

    let db = await coonect()
console.log(command.includes("false"));
    try {
        if(command.includes("false")) throw createError.BadRequest(`send query ${queryname}`) 
        let {rows} = await query(db,command)  
        await db.end()
        switch (method) {
            case 'delete':               
            return res.send(rows.affectedRows != 0 ? {messeag : "All table is Delete"} :  {messeag : "Not Found rows in Data basese"})
            case 'post':     
            return res.send(rows.affectedRows != 0 ? {messeag : "Table ADD"}  : {messeag : "NO table is ADD"})
            case 'put':     
            return res.send(rows.affectedRows != 0 ? {messeag : "Table updaut"}  : {messeag : "NO table is update"})
            default:
            return res.send(rows.length === 0 ? {message : 'Not Data Found'} : rows);
        }
    } catch (error) {
        await db.end()
        return next(error)    
    }
     

}