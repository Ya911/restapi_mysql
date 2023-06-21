require('dotenv').config()
const express = require('express')
const app = express()
if(process.env.ENV !== 'production'){
    const morgan = require('morgan')
    app.use(morgan('dev'))
}





// Router Start 
const {NOTFOUND , ERRORSERVER} = require('./router/errors');
const GET_BOOK = require('./router/get/book')
const GET_AUTHOR = require('./router/get/author')
const DEL_BOOK= require('./router/delete/book')
const DEL_AUTHOR = require('./router/delete/author')
const POST_BOOK= require('./router/post/book')
const POST_AUTHOR = require('./router/post/author')
const PUT_BOOK= require('./router/put/book')
const PUT_AUTHOR= require('./router/put/author')
app.use(GET_BOOK);
app.use(GET_AUTHOR);
app.use(DEL_BOOK);
app.use(DEL_AUTHOR);
app.use(POST_BOOK);
app.use(POST_AUTHOR);
app.use(PUT_BOOK);
app.use(PUT_AUTHOR);
app.use(NOTFOUND)
app.use(ERRORSERVER)
// Router End 







// Listen Start 
app.listen(process.env.PORT || 3000,err=> err ? process.exit(0) : '')
// Listen End 
