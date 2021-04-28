require('dotenv').config();
const express = require('express');
const moongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
// Imports Routes
const clientRoutes = require ('./routes/clients');

//Config app
const app = express();



//PORT
const port =  3000;

//database
moongoose.connect(process.env.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
    
})
.then(() => console.log('db connected'))
.catch(() => console.log('not connected to the database!') )

//Middleware
app.use(cors())
app.use(express.json())


//Routes Middleware
app.use('/api/clients', clientRoutes);




app.listen(port, () => console.log(`app is running  on port ${port}`));