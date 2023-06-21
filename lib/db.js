const mysql = require('mysql2/promise')


const coonect = async ()=>{

  try {
    const connection =  mysql.createPool({
      host : process.env.MYSQL_HOST , 
      user : process.env.MYSQL_USER ,
      password : process.env.MYSQL_ROOT_PASSWORD,
      MYSQL_DATABASE : process.env.MYSQL_DATABASE,
      port: process.env.MYSQL_PORT,
      waitForConnections: true,
      connectionLimit: 10,
      connectTimeout : 10000
    }).pool.promise()
    await connection.query(`use ${process.env.MYSQL_DATABASE}`)
    return connection
  } catch (error) {throw {message : `sql : ${error.code || 'undefined'}`}}

}

const query = async (db , cmd)=>{
  try {
    let [rows] = await db.query(cmd)
    return {rows}
  } catch (error) {throw {message : `sql : ${error.code || 'undefined'}`}}
}




module.exports = {
  coonect , 
  query,
} 









 

