require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();



//database
mongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,

})
.then(() => console.log('db connected'))
.catch(() => console.log('not connected to the database!'))


// Middleware
app.use(express.json())


//Routes Middleware
// app.use('/routes/clients', clientRoutes);






const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server is running on port ${port}`));