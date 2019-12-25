const express = require('express'); 
const homeRoute = require('./routes/index');
const userRoute = require('./routes/user');
const app = express();

const PORT = process.env.PORT || 5000 

//Routes 
app.use('/', homeRoute);
app.use('/user', userRoute);

app.listen(PORT, console.log(`server started on ${PORT}`));