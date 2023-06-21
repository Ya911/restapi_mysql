const createError = require('http-errors')




const NOTFOUND = async (req, res, next) => next(createError.NotFound())

const ERRORSERVER = async (err ,req, res, next) => {
  res.status(err.status || 500)
  return res.send({
    error: {
      status : err.status || 500 ,
      message : err.message
    }
  })

};




module.exports = {ERRORSERVER , NOTFOUND }