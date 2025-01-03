const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// DB config
const db = process.env.MongoURL;


// Connect to DB
mongoose.connect(db)
    .then(() => console.log("MongoDB Connected!!")
    )
    .catch(err => console.log(err)
    )



// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


// Bodyparser
app.use(express.urlencoded({ extended: false }));






// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));



const PORT = process.env.PORT || 4000;

app.listen(PORT, console.log(`⚙️  Server is running at port ${PORT}`));