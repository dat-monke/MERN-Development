const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

// This makes sure that 'items' is drawn in from the folder path /routes/api
const items = require('./routes/api/items')

const app = express(); 

//Bodyparser Middlware
app.use(bodyParser.json());

// Database Configuration 
const db = require('./config/keys').mongoURI; 

//Connecting to the MongoDB 
mongoose
    .connect(db)
    //Create terminal text to confirm success or error of DB connection 
    .then(() => console.log('MongoDB Connected Successfully.')) 
    .catch(err => console.log(err));

// Use Routes [It draws the routes via the file 'items']
app.use('/api/items', items);

// Serve static assets if in production 
if(process.env.NODE_ENV == 'production') {
    // Set static folder 
    app.use(express.static('client/build'))
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}
// Connection to port 5000 [You can specify what port you want to connect to]
const port = process.env.PORT || 5000; 

// This is used to track the connection; if the connection is successful then display the console text
app.listen(port, () => console.log('Server started on port ${port}'));

