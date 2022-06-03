// Setup empty JS object to act as endpoint for all routes
const projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const Cors = require('cors');
app.use(Cors());
// Initialize the main project folder
app.use(express.static('website'));


// Setup Server

const port = 3000;
const server = app.listen(port,()=>{
    console.log(`server is running at port ${port}`);
})




app.get('/wea',(req,res)=>{
    res.send(projectData);
});




//POST data 
let allData = [];
app.post('/sendData',sendDataFun);

function sendDataFun(req,res){
    allData.push(req.body)
    projectData.All=allData;
s
}

//getUiData 
app.get('/getUiData',(req,res)=>{
    res.send(projectData.All);
})

